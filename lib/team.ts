export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  photoSrc?: string;
}

// TODO: Replace with actual Heartland Lawns management team names, titles, and bios.
// Photos are optional — add photoSrc paths under /public/headshots/ when available.
export const team: TeamMember[] = [
  {
    name: "Odysseus",
    title: "Chief Executive Officer",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    name: "Beowulf",
    title: "President & General Manager",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "Arjuna",
    title: "Vice President, Operations",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "Aeneas",
    title: "Vice President, Business Development",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem.",
  },
  {
    name: "Gilgamesh",
    title: "Director of Technical Services",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores.",
  },
  {
    name: "Achilles",
    title: "Director of Customer Experience",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi.",
  },
];
