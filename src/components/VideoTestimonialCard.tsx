"use client";

import { useState } from "react";
import { Play } from "lucide-react";

// Kaltura video testimonials hosted on video.wacren.net (partner 384)
const KALTURA_EMBED_BASE = 'https://api.kaltura.nordu.net/p/384/sp/38400/embedIframeJs/uiconf_id/23453416/partner_id/384?iframeembed=true&playerId=kaltura_player&entry_id=';
const KALTURA_EMBED_TAIL = '&flashvars[streamerType]=auto&flashvars[localizationCode]=en&flashvars[sideBarContainer.plugin]=true&flashvars[sideBarContainer.position]=left&flashvars[sideBarContainer.clickToClose]=true&flashvars[chapters.plugin]=true&flashvars[chapters.layout]=vertical&flashvars[chapters.thumbnailRotator]=false&flashvars[streamSelector.plugin]=true&flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&flashvars[dualScreen.plugin]=true&flashvars[hotspots.plugin]=1&flashvars[Kaltura.addCrossoriginToIframe]=true&wid=';
const KALTURA_THUMBNAIL_BASE = 'https://api.kaltura.nordu.net/p/384/sp/38400/thumbnail/entry_id/';

export interface VideoTestimonialEntry {
  entryId: string;
  wid: string;
  name: string;
  label: string;
  title: string;
}

interface VideoTestimonialCardProps {
  video: VideoTestimonialEntry;
  index: number;
}

export function VideoTestimonialCard({ video, index }: VideoTestimonialCardProps) {
  const [playing, setPlaying] = useState(false);
  const initials = video.name
    .split(' ')
    .map((part) => part[0])
    .join('');

  return (
    <div className="flex flex-col p-8 bg-white rounded-sm border border-slate-900">
      <div className="relative w-full aspect-video bg-slate-900 overflow-hidden mb-8">
        {playing ? (
          <iframe
            id={`kaltura_player_${index}`}
            src={`${KALTURA_EMBED_BASE}${video.entryId}${KALTURA_EMBED_TAIL}${video.wid}`}
            title={video.title}
            className="absolute inset-0 w-full h-full"
            allow="autoplay *; fullscreen *; encrypted-media *"
            allowFullScreen
            sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation"
            frameBorder="0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${video.title}`}
            className="group absolute inset-0 h-full w-full cursor-pointer"
          >
            <img
              src={`${KALTURA_THUMBNAIL_BASE}${video.entryId}/width/800`}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/60 transition-colors group-hover:bg-black/80">
                <Play className="ml-0.5 h-6 w-6 text-white fill-white" />
              </span>
            </span>
          </button>
        )}
      </div>
      <hr className="border-slate-900 mb-6 mt-auto" />
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm tracking-wide shrink-0">{initials}</div>
        <div className="flex flex-col">
          <h4 className="font-semibold text-slate-900 text-sm">{video.name}</h4>
          <span className="text-xs text-slate-500">{video.label}</span>
        </div>
      </div>
    </div>
  );
}
