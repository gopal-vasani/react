const today = new Date().toISOString().slice(0, 10);

const samplePosts = [
  {
    title: "Best Of Blogging",
    description: "Hand-picked tips to start your blogging journey the right way.",
    date: today,
    image: "https://www.blogtyrant.com/wp-content/uploads/2016/06/bestof.png",
    category: "Tech"
  },
  {
    title: "Modern Web Development",
    description: "Explore modern tools and workflows to build on the web.",
    date: today,
    image: "https://b.zmtcdn.com/data/pictures/7/110347/89804e4080a3201a3176f608e6b14419_featured_v2.jpg?output-format=webp",
    category: "Web Development"
  },
  {
    title: "Productivity for Devs",
    description: "Simple strategies to ship faster and stay focused.",
    date: today,
    image: "https://via.placeholder.com/400x200/28a745/ffffff?text=Productivity",
    category: "Programming"
  }
];

export default samplePosts;
