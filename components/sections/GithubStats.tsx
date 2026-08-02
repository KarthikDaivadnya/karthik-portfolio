"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";
import { profile } from "@/lib/data";

interface GhUser {
  name: string | null;
  login: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
}
interface GhRepo {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
}

/**
 * Pulls LIVE data from the public GitHub REST API client-side — repos,
 * followers, star count, top languages, and recently-updated repos — plus
 * a real contribution heatmap image from the public ghchart.rshah.org
 * service. No numbers on this section are invented.
 */
export default function GithubStats() {
  const [user, setUser] = useState<GhUser | null>(null);
  const [repos, setRepos] = useState<GhRepo[]>([]);
  const [status, setStatus] = useState<"loading" | "ok" | "error">("loading");

  useEffect(() => {
    const username = profile.github;
    (async () => {
      try {
        const [uRes, rRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`),
        ]);
        if (!uRes.ok) throw new Error("profile fetch failed");
        setUser(await uRes.json());
        setRepos(rRes.ok ? await rRes.json() : []);
        setStatus("ok");
      } catch {
        setStatus("error");
      }
    })();
  }, []);

  const totalStars = repos.reduce((s, r) => s + (r.stargazers_count || 0), 0);
  const langs = Object.entries(
    repos.reduce<Record<string, number>>((acc, r) => {
      if (r.language) acc[r.language] = (acc[r.language] || 0) + 1;
      return acc;
    }, {})
  )
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);
  const recent = [...repos].sort((a, b) => +new Date(b.updated_at) - +new Date(a.updated_at)).slice(0, 3);

  return (
    <section id="github" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-xl">
          <div className="mb-4 flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.18em] text-secondary before:h-px before:w-5.5 before:bg-secondary">
            GitHub Activity
          </div>
          <h2 className="font-grotesk text-[clamp(28px,4vw,42px)] font-semibold leading-tight">
            Live, straight from the source.
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-inkDim">
            Pulled in real time from the public GitHub API — not hand-typed numbers.
          </p>
        </div>

        <GlowCard className="p-8">
          <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              {user ? (
                <Image src={user.avatar_url} alt="" width={52} height={52} className="rounded-2xl" unoptimized />
              ) : (
                <div className="h-13 w-13 animate-pulse rounded-2xl bg-white/[0.08]" style={{ width: 52, height: 52 }} />
              )}
              <div>
                <div className="font-semibold">{user?.name || (status === "loading" ? "Loading…" : profile.github)}</div>
                <div className="text-[12.5px] text-inkDim">@{profile.github}</div>
              </div>
            </div>
            <a
              href={`https://github.com/${profile.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2.5 text-[12.5px] font-semibold transition-colors hover:border-secondary hover:text-secondary"
            >
              View Profile <ExternalLink size={13} />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
            {[
              { l: "Public Repos", v: user?.public_repos },
              { l: "Followers", v: user?.followers },
              { l: "Stars Earned", v: status === "ok" ? totalStars : undefined },
              { l: "Following", v: user?.following },
            ].map((s) => (
              <div key={s.l} className="bg-bg2 px-4 py-6 text-center">
                <div className="font-grotesk text-[28px] font-bold text-secondary">{s.v ?? "—"}</div>
                <div className="mt-1 font-mono text-[11.5px] text-inkDim">{s.l}</div>
              </div>
            ))}
          </div>

          {langs.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {langs.map(([l]) => (
                <span key={l} className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-1.5 font-mono text-xs">
                  {l}
                </span>
              ))}
            </div>
          )}

          {/* Real contribution heatmap via a public GitHub-stats image service — not fabricated */}
          <div className="mt-7 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://ghchart.rshah.org/6C63FF/${profile.github}`}
              alt={`${profile.github}'s GitHub contribution graph`}
              className="w-full"
              loading="lazy"
            />
          </div>

          {recent.length > 0 && (
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {recent.map((r) => (
                <div key={r.name} className="rounded-xl border border-white/10 bg-white/[0.08] p-4 text-[12.5px]">
                  <b className="mb-1.5 block text-[13.5px]">{r.name}</b>
                  <span className="block text-inkDim">{r.description ? r.description.slice(0, 70) : "No description"}</span>
                  <span className="mt-1.5 block text-inkDim">★ {r.stargazers_count} · {r.language || "—"}</span>
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 font-mono text-[12.5px] text-inkDim">
            {status === "loading" && "Fetching latest data from api.github.com…"}
            {status === "ok" && `Live from api.github.com · last checked ${new Date().toLocaleString()}`}
            {status === "error" && "Could not reach the GitHub API right now — use the profile link above instead."}
          </div>
        </GlowCard>
      </div>
    </section>
  );
}
