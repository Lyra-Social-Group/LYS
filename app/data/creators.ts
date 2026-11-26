// Creators in the Lyra Social Group creator program.
//
// To add a creator: append an object to the `creators` array below, and drop their
// avatar into /public/creators/ (or use a full https:// URL). Only use information the
// creator has published themselves (their link hub / profile pages).

export interface CreatorLink {
  label: string
  url: string
}

export interface Creator {
  /** URL-safe unique id, also used as the Vue key */
  id: string
  /** Display name / handle as shown on the creator's own page */
  name: string
  /** Short tagline from their page (optional) */
  tagline?: string
  /** Bio, in the creator's own words */
  bio: string
  /** Path under /public or a full https:// URL */
  avatar: string
  /** Main place to find all of their links (e.g. a link hub) */
  hubUrl: string
  hubLabel?: string
  /** Platform links, shown in this order */
  links: CreatorLink[]
}

export const creators: Creator[] = [
  {
    id: 'statichex',
    name: 'statichex',
    tagline: 'Small Fox, Big Streams',
    bio:
      "Heyo! My name is Taro The Kitsune, and I do a little bit of everything. I'm mainly a 2D/3D artist; however I also do a lot of other stuff from writing, programming, video production, and I'm even getting into music. I'm also very very social so if you see me online please don't hesitate to say hi ^w^. また、ちょっと日本語を話します。",
    avatar: '/creators/statichex.png',
    hubUrl: 'https://fnstudios.org/slashdotvirus',
    hubLabel: 'All links on FN Studios',
    links: [
      { label: 'Twitch', url: 'https://www.twitch.tv/statichexff' },
      { label: 'YouTube', url: 'https://www.youtube.com/@bluedragonproductioncompany' },
      { label: 'TikTok', url: 'https://www.tiktok.com/@slashdotvirus' },
      { label: 'Instagram', url: 'https://www.instagram.com/statichex/' },
      { label: 'Bluesky', url: 'https://bsky.app/profile/statichex.bsky.social' },
      { label: 'Threads', url: 'https://www.threads.net/@statichex' },
      { label: 'Tumblr', url: 'https://www.tumblr.com/blog/statichex' },
      { label: 'DeviantArt', url: 'https://www.deviantart.com/slashdotvirus' },
      { label: 'Toyhouse', url: 'https://toyhou.se/statichex' },
      { label: 'Artfight', url: 'https://artfight.net/~StaticHex' },
      { label: 'GitHub', url: 'https://github.com/StaticHex' },
      { label: 'Wattpad', url: 'https://www.wattpad.com/user/StaticHex' }
    ]
  }
]
