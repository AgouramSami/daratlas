'use client';

import { useEffect } from 'react';

const ASCII = `
  ____             _____ _    _
 |  _ \\  __ _ _ __|_   _| |__| |__ _ ___
 | | | |/ _\` | '__|/ _ \\ | _\\ |/ _\` / __|
 | |_| | (_| | |  | (_) | |_) | (_| \\__ \\
 |____/ \\__,_|_|   \\___/|_.__/ \\__,_|___/
`;

export function ConsoleEgg() {
  useEffect(() => {
    const banner = `%c${ASCII}`;
    const bannerStyle =
      'color:#C65D3E;font-family:ui-monospace,Menlo,monospace;font-size:11px;line-height:1.1;';
    const lead = '%cSalut, dev. Tu inspectes, on aime.';
    const leadStyle = 'color:#0A0A0A;font-weight:600;font-size:12px;font-family:ui-monospace,Menlo,monospace;';
    const body = `%cCe site est un livrable Dar Atlas. Code écrit à la main, sécurisé par défaut, livré rapidement.
Si tu veux faire bosser le studio, ou postuler en freelance ponctuel : contact@daratlas.fr
Repo, audit Lighthouse et études de cas : daratlas.fr`;
    const bodyStyle = 'color:#0A0A0A;font-size:11px;font-family:ui-monospace,Menlo,monospace;line-height:1.5;';

    if (typeof window !== 'undefined' && typeof console !== 'undefined') {
      console.log(banner, bannerStyle);
      console.log(lead, leadStyle);
      console.log(body, bodyStyle);
    }
  }, []);

  return null;
}
