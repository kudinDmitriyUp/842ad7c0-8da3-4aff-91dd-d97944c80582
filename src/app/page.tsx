"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardOne from '@/components/sections/metric/MetricCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Code, Crown, DollarSign, Globe, HelpCircle, MessageCircle, Package, Shield, Smartphone, Sparkles, Star, TrendingUp, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="large"
      background="plain"
      cardStyle="solid-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Products", id: "product" },
            { name: "Features", id: "feature" },
            { name: "About", id: "about" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Apple"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Think Different. Create Better."
          description="Experience the perfect blend of innovation and simplicity with our groundbreaking products designed for the modern world."
          tag="Innovation"
          tagIcon={Sparkles}
          buttons={[
            {
              text: "Explore Products",
              href: "product"
            },
            {
              text: "Learn More",
              href: "about"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763147731990-7lzrz2rf.jpg"
          imageAlt="Modern workspace showcasing Apple-like design philosophy"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Philosophy"
          description="At Apple, we believe that technology should be intuitive, beautiful, and accessible to everyone. We design products that don't just meet your needs – they anticipate them, creating seamless experiences that feel natural and effortless."
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Revolutionary Features"
          description="Discover the cutting-edge technology that powers our ecosystem"
          tag="Features"
          tagIcon={Zap}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="blur-reveal"
          features={[
            {
              title: "Advanced Analytics",
              description: "Get deep insights into your workflow with our intelligent analytics engine that learns and adapts to your behavior.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763147735138-cjudoooq.jpg",
              imageAlt: "Analytics dashboard interface"
            },
            {
              title: "Privacy First",
              description: "Your data stays yours. Built with privacy by design, ensuring your information remains secure and protected.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763147736077-0pavzcap.jpg",
              imageAlt: "Privacy and security protection"
            },
            {
              title: "Lightning Performance",
              description: "Experience blazing-fast performance with our custom-designed chips that deliver industry-leading efficiency.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763147736805-o96p4akf.jpg",
              imageAlt: "High performance technology"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Our Products"
          description="Explore our premium lineup of innovative products"
          tag="Products"
          tagIcon={Package}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "1",
              brand: "Apple",
              name: "MacBook Pro",
              price: "$1,999",
              rating: 5,
              reviewCount: "12.5k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763147732722-59f4m49r.jpg",
              imageAlt: "MacBook Pro laptop"
            },
            {
              id: "2",
              brand: "Apple",
              name: "iPhone 15 Pro",
              price: "$999",
              rating: 5,
              reviewCount: "25.7k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763147733427-rvd2io17.jpg",
              imageAlt: "iPhone 15 Pro smartphone"
            },
            {
              id: "3",
              brand: "Apple",
              name: "AirPods Pro",
              price: "$249",
              rating: 5,
              reviewCount: "18.2k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763147734396-hts20on4.jpg",
              imageAlt: "AirPods Pro wireless earbuds"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Choose Your Plan"
          description="Select the perfect plan to unlock your potential"
          tag="Pricing"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="scale-rotate"
          plans={[
            {
              id: "basic",
              badge: "Essential",
              badgeIcon: Sparkles,
              price: "$29/month",
              subtitle: "Perfect for individuals getting started",
              features: [
                "Access to core features",
                "5GB cloud storage",
                "Email support",
                "Basic analytics"
              ]
            },
            {
              id: "pro",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$79/month",
              subtitle: "Best for growing teams and businesses",
              features: [
                "All Essential features",
                "50GB cloud storage",
                "Priority support",
                "Advanced analytics",
                "Team collaboration tools"
              ]
            },
            {
              id: "enterprise",
              badge: "Premium",
              badgeIcon: Crown,
              price: "$149/month",
              subtitle: "For large organizations with complex needs",
              features: [
                "All Pro features",
                "Unlimited cloud storage",
                "24/7 phone support",
                "Custom integrations",
                "Advanced security features"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="By the Numbers"
          description="See the impact we've made across the globe"
          tag="Impact"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="opacity"
          metrics={[
            {
              id: "1",
              value: "2B+",
              title: "devices",
              description: "Active devices worldwide running our ecosystem",
              icon: Smartphone
            },
            {
              id: "2",
              value: "99.9%",
              title: "uptime",
              description: "Reliable service you can count on every day",
              icon: Shield
            },
            {
              id: "3",
              value: "50+",
              title: "countries",
              description: "Global presence across all continents",
              icon: Globe
            },
            {
              id: "4",
              value: "15M+",
              title: "developers",
              description: "Creative minds building the future",
              icon: Code
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Leaders"
          description="The visionary team driving innovation forward"
          tag="Leadership"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Sarah Chen",
              role: "CEO & Co-founder",
              description: "Former VP of Product at Apple. Leading the charge in reimagining how technology integrates with daily life.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763147737428-dbhnsn5f.jpg",
              imageAlt: "Sarah Chen, CEO & Co-founder",
              socialLinks: [
                {
                  icon: "Twitter",
                  url: "https://twitter.com"
                },
                {
                  icon: "Linkedin",
                  url: "https://linkedin.com"
                }
              ]
            },
            {
              id: "2",
              name: "Marcus Rodriguez",
              role: "CTO",
              description: "Engineering leader with 15+ years at Google and Microsoft. Passionate about building scalable, beautiful systems.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763147738000-qew129l3.jpg",
              imageAlt: "Marcus Rodriguez, CTO",
              socialLinks: [
                {
                  icon: "Github",
                  url: "https://github.com"
                },
                {
                  icon: "Linkedin",
                  url: "https://linkedin.com"
                }
              ]
            },
            {
              id: "3",
              name: "Emma Thompson",
              role: "Head of Design",
              description: "Award-winning designer formerly at Airbnb. Believes in the power of thoughtful design to change the world.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763147738788-t47d57w7.jpg",
              imageAlt: "Emma Thompson, Head of Design",
              socialLinks: [
                {
                  icon: "Instagram",
                  url: "https://instagram.com"
                },
                {
                  icon: "Dribbble",
                  url: "https://dribbble.com"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Real stories from people who've transformed their workflow"
          tag="Testimonials"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="blur-reveal"
          testimonials={[
            {
              id: "1",
              name: "Jennifer Walsh",
              role: "Product Manager at Stripe",
              testimonial: "This platform has completely transformed how our team collaborates. The intuitive design makes complex workflows feel effortless.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763147739480-ypijhymc.jpg",
              imageAlt: "Jennifer Walsh testimonial"
            },
            {
              id: "2",
              name: "David Kim",
              role: "Founder at TechStart",
              testimonial: "The attention to detail is incredible. Every interaction feels thoughtfully crafted, just like the best Apple products.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763147740199-lauz93nq.jpg",
              imageAlt: "David Kim testimonial"
            },
            {
              id: "3",
              name: "Lisa Chen",
              role: "Design Director at Figma",
              testimonial: "Finally, a tool that understands that great design isn't just about how it looks, but how it works. Absolutely brilliant.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763147741006-or7uobpa.jpg",
              imageAlt: "Lisa Chen testimonial"
            },
            {
              id: "4",
              name: "Alex Morgan",
              role: "CEO at InnovateNow",
              testimonial: "Our productivity has increased by 40% since switching. The seamless integration across devices is exactly what we needed.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763147741698-1lhr7hog.jpg",
              imageAlt: "Alex Morgan testimonial"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join thousands of companies that rely on our platform"
          tag="Partners"
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763147742401-3z530kyw.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763147743161-90j8b3dp.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763147744061-rwn94uvc.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763147744872-8r1syydb.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763147745433-frbzsu5f.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763147745955-m0ffyf0a.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763147746913-vymy9xad.jpg"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about our products and services"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What makes your products different?",
              content: "Our products are designed with simplicity and user experience at the core. We focus on creating intuitive interfaces that work seamlessly across all your devices, following the same design philosophy that made Apple products iconic."
            },
            {
              id: "2",
              title: "Do you offer a free trial?",
              content: "Yes! We offer a 14-day free trial with full access to all features. No credit card required. You can upgrade anytime during or after the trial period."
            },
            {
              id: "3",
              title: "How secure is my data?",
              content: "Security is our top priority. We use enterprise-grade encryption, regular security audits, and follow industry best practices. Your data is stored securely and never shared with third parties."
            },
            {
              id: "4",
              title: "Can I cancel anytime?",
              content: "Absolutely. You can cancel your subscription at any time with no penalties. Your account will remain active until the end of your current billing period."
            },
            {
              id: "5",
              title: "Do you provide customer support?",
              content: "Yes, we provide 24/7 customer support via email, chat, and phone. Our support team is trained to help you get the most out of our platform."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Latest Insights"
          description="Thoughts and stories from our team"
          tag="Blog"
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              category: "Design",
              title: "The Future of Minimalist Design",
              excerpt: "Exploring how simplicity and functionality continue to shape the digital landscape in 2025.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763147748794-yiyvaycn.jpg",
              imageAlt: "Minimalist design concept",
              authorName: "Emma Thompson",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763147738788-t47d57w7.jpg",
              date: "March 15, 2025"
            },
            {
              id: "2",
              category: "Technology",
              title: "Building for the Next Billion Users",
              excerpt: "How we're designing products that scale globally while maintaining personal touches.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763147749644-wm21e301.jpg",
              imageAlt: "Global technology reach",
              authorName: "Marcus Rodriguez",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763147738000-qew129l3.jpg",
              date: "March 12, 2025"
            },
            {
              id: "3",
              category: "Innovation",
              title: "Why Privacy-First Design Matters",
              excerpt: "Our approach to building products that respect user privacy without compromising functionality.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763147750444-38jn8e2t.jpg",
              imageAlt: "Privacy-first design principles",
              authorName: "Sarah Chen",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763147737428-dbhnsn5f.jpg",
              date: "March 10, 2025"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get in Touch"
          description="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
          buttonText="Send Message"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your email address",
              required: true
            },
            {
              name: "company",
              type: "text",
              placeholder: "Company (optional)",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your project or question...",
            rows: 5,
            required: true
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Apple"
          copyrightText="© Apple Inc. 2025. All rights reserved."
          columns={[
            {
              title: "Products",
              items: [
                {
                  label: "iPhone",
                  href: "product"
                },
                {
                  label: "iPad",
                  href: "product"
                },
                {
                  label: "Mac",
                  href: "product"
                },
                {
                  label: "Apple Watch",
                  href: "product"
                }
              ]
            },
            {
              title: "Services",
              items: [
                {
                  label: "iCloud",
                  href: "feature"
                },
                {
                  label: "Apple Music",
                  href: "feature"
                },
                {
                  label: "App Store",
                  href: "feature"
                },
                {
                  label: "Apple Care",
                  href: "feature"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Apple",
                  href: "about"
                },
                {
                  label: "Careers",
                  href: "about"
                },
                {
                  label: "Leadership",
                  href: "team"
                },
                {
                  label: "Investors",
                  href: "about"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "Contact Us",
                  href: "contact"
                },
                {
                  label: "FAQ",
                  href: "faq"
                },
                {
                  label: "Documentation",
                  href: "blog"
                },
                {
                  label: "Community",
                  href: "blog"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: "Twitter",
              href: "https://twitter.com/apple",
              ariaLabel: "Follow us on Twitter"
            },
            {
              icon: "Instagram",
              href: "https://instagram.com/apple",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: "Youtube",
              href: "https://youtube.com/apple",
              ariaLabel: "Subscribe to our YouTube channel"
            },
            {
              icon: "Linkedin",
              href: "https://linkedin.com/company/apple",
              ariaLabel: "Connect with us on LinkedIn"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}