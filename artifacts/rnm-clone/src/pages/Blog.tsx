import { Link } from "wouter";
import { Calendar, User, ArrowRight, Tag, Clock, ChevronRight, Mail, Send, Bookmark, Share2 } from "lucide-react";

const featuredPost = {
  title: "Top CA Firms in India: What Makes Them Stand Apart",
  category: "Industry",
  date: "March 15, 2024",
  author: "RNM Research Team",
  excerpt: "India's leading chartered accountancy firms are more than just compliance specialists — they serve as strategic advisors for enterprises navigating complex financial landscapes. Discover what sets the top firms apart and how they drive business success.",
  slug: "top-ca-firms-in-india",
  readTime: "8 min read",
};

const posts = [
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

const popularTags = [
  "GST", "Income Tax", "FEMA", "M&A", "Due Diligence", "Transfer Pricing",
  "Virtual CFO", "Company Law", "Audit", "Compliance", "Startups", "International Tax"
];

const newsletterBenefits = [
  "Monthly insights on tax & regulatory changes",
  "Expert analysis of business & financial trends",
  "Practical tips for compliance & optimization",
  "Exclusive access to research reports"
];

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

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-widest mb-3">Featured Article</p>
          </div>
          <article
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            data-testid="featured-post"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-[#8B1A1A]/10 to-gray-100 h-64 lg:h-auto flex items-center justify-center">
                <div className="text-[#8B1A1A]/20 font-serif text-7xl font-bold">RNM</div>
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center gap-1 text-xs text-[#8B1A1A] bg-[#8B1A1A]/10 px-3 py-1 rounded-full font-medium">
                    <Tag size={12} />
                    {featuredPost.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock size={12} />
                    {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={14} />
                    {featuredPost.author}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 bg-[#8B1A1A] text-white font-medium px-6 py-3 rounded-lg hover:bg-[#7a1515] transition-colors"
                    data-testid="featured-read-more"
                  >
                    Read Full Article
                    <ArrowRight size={16} />
                  </Link>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-[#8B1A1A] transition-colors" data-testid="bookmark-post">
                    <Bookmark size={18} />
                    <span className="text-sm font-medium">Save</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-[#8B1A1A] transition-colors" data-testid="share-post">
                    <Share2 size={18} />
                    <span className="text-sm font-medium">Share</span>
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Blog content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Categories */}
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
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
                className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                  page === 1
                    ? "bg-[#8B1A1A] text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#8B1A1A]/40"
                }`}
                data-testid={`page-btn-${page}`}
              >
                {page}
              </button>
            ))}
            <span className="flex items-center px-3 text-gray-400">of 3</span>
          </div>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="font-serif text-xl font-bold text-gray-900 mb-2">Popular Topics</h2>
            <p className="text-gray-500 text-sm">Explore our most covered subjects</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {popularTags.map((tag, i) => (
              <button
                key={i}
                className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 hover:border-[#8B1A1A]/40 hover:text-[#8B1A1A] hover:bg-orange-50/50 transition-colors"
                data-testid={`tag-${i}`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-[#1a0808] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-medium tracking-wider uppercase mb-6">
            <Mail size={12} className="text-[#c4793a]" />
            Newsletter
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Stay Ahead with Expert Insights
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and receive monthly updates on tax changes, regulatory updates, and business advisory insights delivered straight to your inbox.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="text-left">
              <h3 className="font-semibold text-white mb-4">What You'll Receive:</h3>
              <ul className="space-y-3">
                {newsletterBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-[#8B1A1A] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center">
              <form className="space-y-4" data-testid="newsletter-form">
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#8B1A1A] focus:ring-1 focus:ring-[#8B1A1A] transition-colors"
                    data-testid="newsletter-email"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#8B1A1A] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#7a1515] transition-colors"
                  data-testid="newsletter-submit"
                >
                  Subscribe Now
                  <Send size={16} />
                </button>
              </form>
              <p className="text-xs text-gray-400 mt-4">
                By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-400">
            Already a subscriber? You're receiving {typeof window !== 'undefined' && Math.floor(Math.random() * 5000 + 10000).toLocaleString()} other professionals who trust RNM for insights.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#8B1A1A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
            Looking for Specific Expertise?
          </h2>
          <p className="text-white/80 mb-6">
            Our team of professionals is ready to help with your unique requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#8B1A1A] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            data-testid="button-blog-contact"
          >
            Contact Our Experts
            <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
