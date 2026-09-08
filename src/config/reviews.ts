export type ReviewSource = 'Google' | 'The Knot' | 'WeddingWire';

export interface Review {
  name: string;
  quote: string;
  source: ReviewSource;
  date?: string;
}

export const reviewPageSize = 9;

export const reviews: Review[] = [
  {
    name: 'Brooklyn Cabrera',
    source: 'Google',
    quote:
      'Caitlynn did my hair and makeup for my wedding day and she absolutely nailed it. She captured my vision so perfectly, and I felt so beautiful. Booking and communication were so easy and clear.',
  },
  {
    name: 'Keli Renta',
    source: 'Google',
    quote:
      'Thank you for your talent and professionalism. The process was so easy and communication was perfect. Maya and Alexis made our wedding day extra special and helped us feel comfortable, confident, and beautiful.',
  },
  {
    name: 'Jade Nguyen',
    source: 'Google',
    quote:
      'Winter was my MUA and Grace was my hair stylist. They listened during the trial and delivered. I had six bridesmaids and everything was planned and timely. Everyone loved their hair and makeup.',
  },
  {
    name: 'Gracie Watson',
    source: 'Google',
    quote:
      'The planning was so easy and they let me change things as many times as needed. Alicia did my makeup and Brooklyn did my hair — curls that did not budge. My whole bridal party loved her.',
  },
  {
    name: 'Fiona Malone',
    source: 'Google',
    quote:
      'Grace was an absolute dream — kind, professional, and fun to have around. She made the whole experience feel calm and effortless, and every style she did was gorgeous.',
  },
  {
    name: 'Katie White',
    source: 'Google',
    quote:
      'MJ and Shacia were truly amazing. From the trial to the big day, they made everything feel seamless and stress-free. I could not have asked for a better glam team.',
  },
  {
    name: 'Yessica Telleria',
    source: 'Google',
    quote:
      'Anytime I had questions, they were so quick to respond. I was in love with my wedding hair and makeup and it lasted all day and night. Grace, Abby, and Kristen were the absolute best.',
  },
  {
    name: 'Traci Graham',
    source: 'Google',
    quote:
      'Grace was absolutely wonderful. She saw exactly what I wanted and made it happen. Everyone at my wedding was bragging about how beautiful I looked with tears in their eyes.',
  },
  {
    name: 'Breanna W',
    source: 'The Knot',
    date: 'Jan 2025',
    quote:
      'I had an amazing experience with Effortless Beauty! I used them for both my engagement shoot and wedding hair and makeup. They were very responsive, nailed my inspo photos at the trial, and showed up right on time for 12 girls’ hair and 4 makeup looks. I’m so glad I went with them.',
  },
  {
    name: 'Lesli B',
    source: 'The Knot',
    date: 'Apr 2026',
    quote:
      'I am so thankful I booked Effortless Beauty! My stylist, Krista, was so kind and professional. She showed up right on time and listened to exactly what I wanted. I did the elopement package for hair and makeup, and it was perfect even without a trial.',
  },
  {
    name: 'Kristen M',
    source: 'The Knot',
    date: 'Mar 2026',
    quote:
      'This was a destination wedding so communication was super important, and it was perfect. They were very responsive, showed up on time, and did exactly what I wanted. If you do not live in TN — or if you do — they are the go-to for wedding beauty.',
  },
  {
    name: 'Avery M',
    source: 'The Knot',
    date: 'Feb 2026',
    quote:
      'Grace was incredible! She was so sweet and professional. She managed to give some serious volume to my fine hair that held all night long. The soft glam look was perfect and also held through the night. I don’t think I’ve ever felt so beautiful!',
  },
  {
    name: 'Lilly B',
    source: 'The Knot',
    date: 'Jan 2026',
    quote:
      'They did both my hair and makeup, plus a few members of the wedding party. Kenzie Phillips was my stylist on the day and brought the look I was going for to life. She made me feel at ease on a very important day.',
  },
  {
    name: 'Kara M',
    source: 'The Knot',
    date: 'Jan 2026',
    quote:
      'Effortless Beauty was amazing! They were so sweet and kind and made me feel relaxed and comfortable. I was so happy with my wedding day hair and makeup!',
  },
  {
    name: 'BreAnna R',
    source: 'The Knot',
    date: 'Dec 2025',
    quote: 'Great communication and were very flexible. Experienced stylists! Thankful to have them!',
  },
  {
    name: 'Lisa G',
    source: 'The Knot',
    date: 'Dec 2025',
    quote:
      'Grace and Chloe were professional, friendly, and made us all feel comfortable and confident! Everyone’s hair and makeup was simple yet beautiful — natural was what we were going for — and it all lasted the whole night.',
  },
  {
    name: 'Audra K',
    source: 'The Knot',
    date: 'Nov 2025',
    quote:
      'Grace was absolutely a dream to work with! From the moment I met her for the trial, I knew she was going to be amazing. The day of the wedding she nailed all of the hair and makeup looks and even offered to help fix my toddler’s hair.',
  },
  {
    name: 'Grace H',
    source: 'The Knot',
    date: 'Nov 2025',
    quote: 'Effortless Beauty was awesome! They nailed my vintage hair updo request, and everyone loved their makeup.',
  },
  {
    name: 'Kendra S',
    source: 'The Knot',
    date: 'Nov 2025',
    quote:
      'Shachia was my hair and makeup artist for my wedding and engagement pictures! She made me feel absolutely beautiful. My bridesmaids looked gorgeous — Shachia did their makeup and Madison did their hair.',
  },
  {
    name: 'Kristen L',
    source: 'The Knot',
    date: 'Nov 2025',
    quote:
      'I had a wonderful time with Effortless Beauty!! I was not a fan of my first makeup trial and was kindly able to get a new artist for my second. Zoe is fantastic and was the perfect fit for me on my wedding day.',
  },
  {
    name: 'Gabby A',
    source: 'The Knot',
    date: 'Oct 2025',
    quote:
      'Effortless Beauty provided exceptional services for the bridesmaids, MOB, MOG, and myself. Our makeup and hair did look effortless. The ladies doing the beauty services were so kind!',
  },
  {
    name: 'Anita A',
    source: 'The Knot',
    date: 'Jul 2025',
    quote:
      'I was from out of state so I could only do my makeup trial close to my wedding day, and they were so accommodating. My artist was open to feedback about my thick, curly hair and helped me find the right makeup look for my skin tone. She made me look and feel like a supermodel!',
  },
  {
    name: 'Natalie G',
    source: 'The Knot',
    date: 'Apr 2025',
    quote:
      'I wholeheartedly recommend Effortless Beauty. I worked with Shachia for makeup and Makayla for hair, and they made me feel beautiful and confident while still looking like myself. Despite a group of 17, they stayed organized, efficient, and even finished ahead of schedule.',
  },
  {
    name: 'Rose H',
    source: 'The Knot',
    date: 'Dec 2024',
    quote:
      'Anytime I had questions, they were always so quick to respond. I was in love with my wedding hair and makeup and it lasted all day and night. Shachia and Leeanne arrived and set up in lightning speed. I was so nervous for the end result — when I saw it, I cried!',
  },
  {
    name: 'Kaitlin C',
    source: 'The Knot',
    date: 'Dec 2024',
    quote:
      'Effortless Beauty did absolutely amazing work for my wedding. They did all of my bridesmaids, my flower girls, and all the moms and grandmothers. They worked efficiently and made everyone feel so beautiful.',
  },
  {
    name: 'Jordan B',
    source: 'The Knot',
    date: 'Dec 2024',
    quote:
      'They made this out-of-town bride feel comfortable and taken care of. They answered lots of questions prior to booking, were willing to make changes as things came up, and were incredibly accommodating when I decided pretty last minute that I wanted a trial.',
  },
  {
    name: 'Katie G',
    source: 'The Knot',
    date: 'Nov 2024',
    quote:
      'Krista made my vision for bridal hair and makeup come to life. She enhanced my natural features and made my makeup look truly effortless. Shelbie did all my bridesmaids’ hair and everyone was so happy. Grace was a dream with booking when we changed our numbers five times.',
  },
  {
    name: 'Riccarda E',
    source: 'The Knot',
    date: 'Oct 2024',
    quote:
      'I felt STUNNING and have never felt more beautiful. I wanted all of my hair up in a style that would stay, and a natural, glowing version of myself. Shachia and Kristen delivered. The hair and makeup stayed from first look to the grand exit without a touch-up.',
  },
  {
    name: 'Madison M',
    source: 'The Knot',
    date: 'Oct 2024',
    quote:
      'Great with communication leading up to the big day! Our artist was punctual and so sweet. Myself and my girls felt so pampered and beautiful!',
  },
  {
    name: 'Sienna M',
    source: 'The Knot',
    date: 'Sep 2024',
    quote:
      'These girls were so sweet and made it so easy to book. They were so kind to all of us — we had 12 hair and makeup looks — and made the day so fun.',
  },
  {
    name: 'Casey G',
    source: 'The Knot',
    date: 'Sep 2024',
    quote:
      'The girls were fantastic! It was affordable, quick, and stunning. They were the only vendor that we had ZERO issues with on our wedding day. Not a hair fell out of place or makeup smudged. Makayla is so talented.',
  },
  {
    name: 'Danielle R',
    source: 'The Knot',
    date: 'Aug 2024',
    quote:
      'I had a destination wedding in TN, so I did not get a trial. Effortless Beauty provided even better service than I expected. I wanted to feel beautiful but not unrecognizable, and they did just that. Makeup lasted all day and everyone loved their looks.',
  },
  {
    name: 'Angelica M',
    source: 'The Knot',
    date: 'Jul 2024',
    quote:
      'Grace, Nicole, and Krystal were wonderful through planning. Shachia and Makayla did hair and makeup and traveled to the cabin we were staying at. It was about a humid 100 degrees and hair and makeup stayed mostly in place the whole day. 10/10 recommend.',
  },
  {
    name: 'Kaley M',
    source: 'The Knot',
    date: 'Jun 2024',
    quote:
      'Effortless Beauty was amazing to work with. I loved my hair and makeup and so did my entire bridal party. We got compliments all evening long! Their team was incredibly kind, accommodating, and a joy to work with.',
  },
  {
    name: 'Jenna F',
    source: 'The Knot',
    date: 'Jun 2024',
    quote:
      'I was extremely nervous because I love doing my own makeup. Shachia did exactly what I asked for — a soft glam version of my everyday look. On the wedding morning her energy was infectious. I felt empowered and confident. She made me look exactly as I had envisioned, if not better.',
  },
  {
    name: 'Katherine G',
    source: 'The Knot',
    date: 'Jun 2024',
    quote:
      'I hired the Effortless team for myself, two bridesmaids, and both moms. I was lucky enough to work with them for engagement pictures and a bridal trial too. The team made me feel so comfortable, and I felt so beautiful on my wedding day.',
  },
  {
    name: 'Leigh-Anne M',
    source: 'The Knot',
    date: 'Jun 2024',
    quote:
      'I used the Effortless Beauty team for my wedding and I highly recommend them. They communicated well throughout the process, were very professional, and their work was excellent.',
  },
  {
    name: 'Annalise W',
    source: 'The Knot',
    date: 'Jun 2024',
    quote: 'Great to work with and the best travel price around! They were very helpful and talented in their work!',
  },
  {
    name: 'Hannah F',
    source: 'The Knot',
    date: 'Jun 2024',
    quote:
      'Effortless Beauty was a MUST for my wedding! They were professional and made my bridesmaids and I feel so comfortable. My makeup and hair were perfect, exactly what I asked for. If you’re on the fence, it’s worth it!',
  },
  {
    name: 'Gretchen S',
    source: 'The Knot',
    date: 'Apr 2024',
    quote:
      'I cannot be happier with how it turned out. Makeup stayed all day long and looked great long after we made our grand exit. Hair looked just as good at 11pm as at 11am despite wind blowing it every which way.',
  },
  {
    name: 'Danielle B',
    source: 'The Knot',
    date: 'Apr 2024',
    quote:
      'From first contact they were professional and responsive. On the wedding day the team arrived punctually with a calming energy. My hair stayed perfectly in place and my makeup looked fresh in every photo. If you want artists who are talented, kind, and dedicated, look no further.',
  },
  {
    name: 'Emma R',
    source: 'The Knot',
    date: 'Mar 2024',
    quote:
      'From the very start, their communication was quick and useful. Shachia made me glow — I felt so beautiful and natural, and it lasted the entire day. Makayla nailed two hair styles and waited for the second look. Their prices, professionalism, and talent make them the obvious choice.',
  },
  {
    name: 'Rebecca T',
    source: 'The Knot',
    date: 'Feb 2024',
    quote:
      'I loved my hair and makeup and the overall experience. I had no stress and total faith and it all worked out in the end. I would highly recommend Effortless Beauty for anyone!',
  },
  {
    name: 'Sierra K',
    source: 'The Knot',
    date: 'Jan 2024',
    quote:
      'They did such a good job communicating with me and ensuring I knew what to expect the whole way. They did great for my trial, and the wedding day went so smooth. I am so thankful for how beautiful my hair and makeup turned out!',
  },
  {
    name: 'Chelsea D',
    source: 'The Knot',
    date: 'Jan 2024',
    quote:
      'The Effortless Beauty team is incredible! Leanne did my hair, and it was stunning. Madison did my makeup, and it stayed on all night long. These team members took the time to create the exact look I wanted.',
  },
  {
    name: 'Morgan M',
    source: 'The Knot',
    date: 'Nov 2023',
    quote:
      'I am not from TN and was very nervous to book someone I didn’t know. They shared their socials, accommodated our payment plan, and added a bridesmaid last minute. Kristen and Sepi listened, and morning-of all four girls were already there setting up. I still looked like myself, which was what I wanted.',
  },
  {
    name: 'Ashley R',
    source: 'The Knot',
    date: 'Nov 2023',
    quote:
      'They were fantastic to work with — professional and personable. I am a minimal makeup bride and they listened to me and made my vision better than I could have imagined. They were very flexible with adding people and fast at responding to emails.',
  },
  {
    name: 'Brandi F',
    source: 'The Knot',
    date: 'Nov 2023',
    quote:
      'Shachia listened to exactly what I wanted and made it happen! I have never felt more beautiful in my entire life. If I could take her with me wherever I go, I would. I would recommend her and Effortless Beauty to any bride.',
  },
  {
    name: 'Rachel W',
    source: 'The Knot',
    date: 'Nov 2023',
    quote:
      'Effortless Beauty was by far the best hair and makeup experience I’ve ever had! They were so accommodating to all of us girls. I was obsessed with my hair and makeup. My hair stayed put all night long — even dancing for hours.',
  },
  {
    name: 'Alli K',
    source: 'The Knot',
    date: 'Nov 2023',
    quote:
      'Krystal was quick to respond and so accommodating with last-minute changes. I wasn’t in love with my makeup after the trial, emailed photos, and day-of was perfect. Abby and Shachia were personable, lovely, and worked quickly but efficiently.',
  },
  {
    name: 'Tori C',
    source: 'The Knot',
    date: 'Oct 2023',
    quote:
      'Had a wonderful time with Miss Caitlynn! She did a wonderful job making my hair and makeup dreams come true for our wedding day. 12/10 recommend!!',
  },
  {
    name: 'Ashton L',
    source: 'The Knot',
    date: 'Oct 2023',
    quote:
      'Zoey did an incredible job making sure we were running in a timely manner, and we never felt rushed. She delivered exactly what we wanted for how our makeup and hair looked.',
  },
  {
    name: 'Hillary M',
    source: 'The Knot',
    date: 'Sep 2023',
    quote:
      'The ladies at Effortless Beauty made my hair and makeup look exactly like I wanted. My bridesmaids and I were so impressed with how well everything held up throughout the night. Grace and Sepi were incredible to work with.',
  },
  {
    name: 'Sam Z',
    source: 'The Knot',
    date: 'Sep 2023',
    quote:
      'I will forever recommend these girls to everyone!! Krystal stayed on top of everything and easily helped when I needed to make changes. Ashton, Kristen, Leeanne, and Shachia went above and beyond to make every girl feel beautiful.',
  },
  {
    name: 'Hannah A',
    source: 'The Knot',
    date: 'Sep 2023',
    quote:
      'I’m a wedding planner and I knew without a doubt Effortless was the best choice for me. They took such great care of me for my engagement session, and Emily did a fantastic job at my trial. My girls came to the shop the morning of and loved everything the team did.',
  },
  {
    name: 'Cheyanne',
    source: 'WeddingWire',
    date: 'Nov 2025',
    quote:
      'The women were so respectful and nice throughout everything. They were attentive to all the needs and wants we had. Additionally, they were flexible with services we added last minute. So grateful for the team and happy we chose the best company.',
  },
  {
    name: 'Courtney',
    source: 'WeddingWire',
    date: 'Aug 2025',
    quote:
      'All of the stylists were amazing! They handled our large wedding with ease. All the girls’ hair and makeup stayed even though we were dancing in a downpour.',
  },
  {
    name: 'Lauren',
    source: 'WeddingWire',
    date: 'Jun 2025',
    quote:
      '10/10 would recommend! They did a wonderful job and made the process easy and stress free. For a destination wedding I was not able to meet the stylist until the day of, but they were responsive and helpful via email the whole time. She did an amazing job on both makeup and hair.',
  },
];

export const featuredHomeReviews = reviews
  .filter((review) => review.source === 'Google')
  .map((review) => ({
    name: review.name,
    role: 'Google review' as const,
    quote: review.quote,
  }));
