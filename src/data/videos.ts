export interface Video {
  id: string;
  title: string;
  category: string;
  url: string;
  thumbnail: string;
}

// Utility function to extract thumbnail from Drive URL
const getDriveThumbnail = (url: string) => {
  const fileId = url.split('/')[5];
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
};

export const videos: Video[] = [
  // Anime Edits
  {
    id: "1",
    title: "Anime Edit 1",
    category: "Anime Edits",
    url: "https://drive.google.com/file/d/1zNWeJMVvjSwwXJnCkEmhkjd9lStajSsU/preview",
    thumbnail: getDriveThumbnail("https://drive.google.com/file/d/1zNWeJMVvjSwwXJnCkEmhkjd9lStajSsU/preview")
  },
  {
    id: "2",
    title: "Anime Edit 2",
    category: "Anime Edits",
    url: "https://drive.google.com/file/d/1RCTuGKvDZy4ssjWDl5B8DP2X4eEpYkLd/preview",
    thumbnail: getDriveThumbnail("https://drive.google.com/file/d/1RCTuGKvDZy4ssjWDl5B8DP2X4eEpYkLd/preview")
  },
  {
    id: "3",
    title: "Anime Edit 3",
    category: "Anime Edits",
    url: "https://drive.google.com/file/d/16pBNw2_fZ3486JHJ_DKBKdwpBBGUGlBq/preview",
    thumbnail: getDriveThumbnail("https://drive.google.com/file/d/16pBNw2_fZ3486JHJ_DKBKdwpBBGUGlBq/preview")
  },
  {
    id: "4",
    title: "Anime Edit 4",
    category: "Anime Edits",
    url: "https://drive.google.com/file/d/1Czd84z1fyhG1nvjbgFOJRkGaQD34GHuc/preview",
    thumbnail: getDriveThumbnail("https://drive.google.com/file/d/1Czd84z1fyhG1nvjbgFOJRkGaQD34GHuc/preview")
  },
  
 // Popular Edits
{
  id: "21",
  title: "Popular Edit 4",
  category: "Popular Edits",
  url: "https://drive.google.com/file/d/1B9GygcsRf3pm63vbuRPSNSZpTxnuV4lG/preview",
  thumbnail: getDriveThumbnail("https://drive.google.com/file/d/1B9GygcsRf3pm63vbuRPSNSZpTxnuV4lG/preview")
},
{
  id: "5",
  title: "Popular Edit 1",
  category: "Popular Edits",
  url: "https://drive.google.com/file/d/1K9Qv00URH4kldH87jP4GL10YO6loOSjx/preview",
  thumbnail: getDriveThumbnail("https://drive.google.com/file/d/1K9Qv00URH4kldH87jP4GL10YO6loOSjx/preview")
},
{
  id: "6",
  title: "Popular Edit 2",
  category: "Popular Edits",
  url: "https://drive.google.com/file/d/18cpAxEt3RZeI_htpeuhOqFHx0p0n3hU_/preview",
  thumbnail: getDriveThumbnail("https://drive.google.com/file/d/18cpAxEt3RZeI_htpeuhOqFHx0p0n3hU_/preview")
},
{
  id: "7",
  title: "Popular Edit 3",
  category: "Popular Edits",
  url: "https://drive.google.com/file/d/1XEltWOoJVLQAo_Wv6JSlKrGwP49bKfmV/preview",
  thumbnail: getDriveThumbnail("https://drive.google.com/file/d/1XEltWOoJVLQAo_Wv6JSlKrGwP49bKfmV/preview")
},

  // Intros
  {
    id: "8",
    title: "Intro Animation",
    category: "Intros",
    url: "https://drive.google.com/file/d/1X2eVzDTPhNIDB_VXPBSjiE7l6MXEuipL/preview",
    thumbnail: getDriveThumbnail("https://drive.google.com/file/d/1X2eVzDTPhNIDB_VXPBSjiE7l6MXEuipL/preview")
  },

  // Logo Animations
  {
    id: "9",
    title: "Logo Animation 1",
    category: "Logo Animation",
    url: "https://drive.google.com/file/d/1X1N0bnhaPAA_T_WUjlzpz7mnxW_7b5WA/preview",
    thumbnail: getDriveThumbnail("https://drive.google.com/file/d/1X1N0bnhaPAA_T_WUjlzpz7mnxW_7b5WA/preview")
  },
  {
    id: "10",
    title: "Logo Animation 2",
    category: "Logo Animation",
    url: "https://drive.google.com/file/d/1sCyrz0AJnMuwtYFLLnhjn16PyctSQe1d/preview",
    thumbnail: getDriveThumbnail("https://drive.google.com/file/d/1sCyrz0AJnMuwtYFLLnhjn16PyctSQe1d/preview")
  },
  {
    id: "11",
    title: "Logo Animation 3",
    category: "Logo Animation",
    url: "https://drive.google.com/file/d/193vp3ctrs-0kbiTZ0wXtqaBT8oSR9bvI/preview",
    thumbnail: getDriveThumbnail("https://drive.google.com/file/d/193vp3ctrs-0kbiTZ0wXtqaBT8oSR9bvI/preview")
  },
  {
    id: "12",
    title: "Logo Animation 4",
    category: "Logo Animation",
    url: "https://drive.google.com/file/d/1ZyvD82e1SswHDV2Q2-w1DKyEcJwKQ_7i/preview",
    thumbnail: getDriveThumbnail("https://drive.google.com/file/d/1ZyvD82e1SswHDV2Q2-w1DKyEcJwKQ_7i/preview")
  },
  {
    id: "13",
    title: "Logo Animation 5",
    category: "Logo Animation",
    url: "https://drive.google.com/file/d/1nDu3KUQJNsQOXAoUQwUfa8r3TEySeeUt/preview",
    thumbnail: getDriveThumbnail("https://drive.google.com/file/d/1nDu3KUQJNsQOXAoUQwUfa8r3TEySeeUt/preview")
  },
  {
    id: "14",
    title: "Logo Animation 6",
    category: "Logo Animation",
    url: "https://drive.google.com/file/d/15Xn6lCnTitK9tiU4CtG-AH0xRkuyPq6v/preview",
    thumbnail: getDriveThumbnail("https://drive.google.com/file/d/15Xn6lCnTitK9tiU4CtG-AH0xRkuyPq6v/preview")
  },
  {
    id: "15",
    title: "Logo Animation 7",
    category: "Logo Animation",
    url: "https://drive.google.com/file/d/1rKxdgolp6dY2LSX4g1TCMdsRwGezw_uX/preview",
    thumbnail: getDriveThumbnail("https://drive.google.com/file/d/1rKxdgolp6dY2LSX4g1TCMdsRwGezw_uX/preview")
  },

  // HeadCam Reels
  {
    id: "16",
    title: "HeadCam Reel 1",
    category: "HeadCam Reels",
    url: "https://drive.google.com/file/d/1eNw3p6SkeSoUH56puKLLEBi22qVI-jLP/preview",
    thumbnail: getDriveThumbnail("https://drive.google.com/file/d/1eNw3p6SkeSoUH56puKLLEBi22qVI-jLP/preview")
  },
  {
    id: "17",
    title: "HeadCam Reel 2",
    category: "HeadCam Reels",
    url: "https://drive.google.com/file/d/1c4wb0eEyKRCMEa0PlSo141sD3siSMUtR/preview",
    thumbnail: getDriveThumbnail("https://drive.google.com/file/d/1c4wb0eEyKRCMEa0PlSo141sD3siSMUtR/preview")
  },
  {
    id: "18",
    title: "HeadCam Reel 3",
    category: "HeadCam Reels",
    url: "https://drive.google.com/file/d/1DIJYd_hF1yxd_5zgiQciiC8i5gN-mvD2/preview",
    thumbnail: getDriveThumbnail("https://drive.google.com/file/d/1DIJYd_hF1yxd_5zgiQciiC8i5gN-mvD2/preview")
  },
  {
    id: "19",
    title: "HeadCam Reel 4",
    category: "HeadCam Reels",
    url: "https://drive.google.com/file/d/19P6LniPFloUBEmTEuFZTrLjapZTjRJiB/preview",
    thumbnail: getDriveThumbnail("https://drive.google.com/file/d/19P6LniPFloUBEmTEuFZTrLjapZTjRJiB/preview")
  },

  // Long Form
  {
    id: "20",
    title: "Long Form Video",
    category: "Long Form",
    url: "https://drive.google.com/file/d/1XnP8SPnMzPkyue2yiL79eYnNWHc4rG4y/preview",
    thumbnail: getDriveThumbnail("https://drive.google.com/file/d/1XnP8SPnMzPkyue2yiL79eYnNWHc4rG4y/preview")
  }
];

export const personalInfo = {
  name: "Syed AbdurRehman",
  siteName: "Editor AbdurRehman",
  email: "syed4abdurrehman@gmail.com",
  phone: "+923324112404"
};