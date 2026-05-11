import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn
} from "react-icons/fa";

export default function SocialSection() {
  return (
    <section className="social-section">

      <div className="section-top">
        <span className="section-label">
          Social Presence
        </span>

        <h2 className="section-title">
          Dominating Every Platform
        </h2>
      </div>

      <div className="social-grid">

        {/* INSTAGRAM */}
        <div className="social-card">
          <div className="social-icon instagram">
            <FaInstagram />
          </div>

          <h3>Instagram</h3>

          <p>@thekushwahasir</p>

          <div className="social-number">
            577k
          </div>

          <span>Followers</span>
        </div>

        {/* YOUTUBE */}
        <div className="social-card">
          <div className="social-icon youtube">
            <FaYoutube />
          </div>

          <h3>YouTube</h3>

          <p>The Kushwaha Sir</p>

          <div className="social-number">
            92.6k
          </div>

          <span>Subscribers</span>
        </div>

        {/* LINKEDIN */}
        <div className="social-card">
          <div className="social-icon linkedin">
            <FaLinkedinIn />
          </div>

          <h3>LinkedIn</h3>

          <p>Professional Network</p>

          <div className="social-number">
            920k
          </div>

          <span>Connections</span>
        </div>

      </div>

      {/* BIG METRICS */}
      <div className="mega-stats">

        <div className="mega-card">
          <h4>2.4B</h4>
          <span>Total Views</span>
        </div>

        <div className="mega-card">
          <h4>96%</h4>
          <span>Engagement</span>
        </div>

        <div className="mega-card">
          <h4>247</h4>
          <span>Viral Reels</span>
        </div>

      </div>

    </section>
  );
}