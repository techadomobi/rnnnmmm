import { Link } from "wouter";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";

const posts = [
  {
    title: "Top CA Firms in India: What Makes Them Stand Apart",
    category: "Industry",
    date: "March 15, 2024",
    author: "RNM Research Team",
    excerpt: "India's leading chartered accountancy firms are more than just compliance specialists — they serve as strategic advisors for enterprises navigating complex financial landscapes.",
    slug: "top-ca-firms-in-india",
  },
  {
    title: "Understanding GST Input Tax Credit: A Comprehensive Guide",
    category: "Taxation",
    date: "March 8, 2024",
    author: "RNM Tax Team",
    excerpt: "GST input tax credit remains one of the most complex yet crucial aspects of India's indirect taxation framework. This guide breaks down the eligibility, conditions, and procedures.",
    slug: "gst-input-tax-credit-guide",
  },
  {
    title: "FEMA Compliance for Foreign Investments in India",
    category: "Regulatory",
    date: "February 28, 2024",
    author: "RNM Advisory Team",
    excerpt: "Foreign exchange management remains a critical compliance area for businesses with international operations. Understanding FEMA regulations is essential for smooth cross-border transactions.",
    slug: "fema-compliance-foreign-investments",
  },
  {
    title: "Virtual CFO Services: The Future of Financial Management",
    category: "Consultancy",
    date: "February 20, 2024",
    author: "RNM Consulting Team",
    excerpt: "Small and mid-sized enterprises increasingly recognize the value of Virtual CFO services — getting CFO-level financial expertise without the cost of a full-time executive.",
    slug: "virtual-cfo-services-future",
  },
  {
    title: "Finding the Right Chartered Accountant Near You",
    category: "Advisory",
    date: "February 12, 2024",
    author: "RNM Editorial",
    excerpt: "Choosing the right chartered accountant is a pivotal decision for your business. This guide outlines the key considerations and questions to ask when evaluating CA firms.",
    slug: "finding-right-chartered-accountant",
  },
  {
    title: "India Entry Strategy: A Guide for Foreign Companies",
    category: "Corporate Finance",
    date: "January 30, 2024",
    author: "RNM Corporate Finance",
    excerpt: "With India emerging as one of the world's fastest-growing economies, foreign companies are increasingly looking at India entry. This guide covers the regulatory landscape and strategic options.",
    slug: "india-entry-strategy-guide",
  },
];

const categories = ["All", "Taxation", "Regulatory", "Consultancy", "Corporate Finance", "Industry", "Advisory"];

export default function Blog() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-[#1a0808] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-[#c4793a] text-sm font-semibold uppercase tracking-widest mb-4">RNM Blog</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5">
              Insights & Perspectives
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Expert commentary on taxation, regulatory changes, corporate finance, and the Indian business landscape from our team of professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Blog content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat, i) => (
              <button
                key={i}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  i === 0
                    ? "bg-[#8B1A1A] text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#8B1A1A]/40 hover:text-[#8B1A1A]"
                }`}
                data-testid={`category-filter-${i}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <article
                key={i}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group"
                data-testid={`blog-post-${i}`}
              >
                <div className="bg-gradient-to-br from-[#8B1A1A]/10 to-gray-100 h-40 flex items-center justify-center">
                  <div className="text-[#8B1A1A]/30 font-serif text-5xl font-bold">RNM</div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="flex items-center gap-1 text-[10px] text-[#8B1A1A] bg-[#8B1A1A]/10 px-2 py-0.5 rounded-full font-medium">
                      <Tag size={9} />
                      {post.category}
                    </span>
                  </div>
                  <h2 className="font-semibold text-gray-900 leading-snug mb-2 group-hover:text-[#8B1A1A] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={11} />
                      {post.author}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm text-[#8B1A1A] font-medium group-hover:underline"
                    data-testid={`blog-read-more-${i}`}
                  >
                    Read More <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center gap-2">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`w-9 h-9 rounded text-sm font-medium transition-colors ${
                  page === 1
                    ? "bg-[#8B1A1A] text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#8B1A1A]/40"
                }`}
                data-testid={`page-btn-${page}`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
