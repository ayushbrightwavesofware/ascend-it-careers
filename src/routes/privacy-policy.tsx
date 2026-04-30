import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Shield } from "lucide-react";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | DECODETECH" },
      { name: "description", content: "Privacy Policy for DECODETECH — Protecting your digital future." },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="glass p-8 md:p-12 rounded-[2rem] shadow-elegant border border-primary/5 animate-fade-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl hero-bg flex items-center justify-center shadow-glow">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold gradient-text">Privacy Policy</h1>
                <p className="text-sm text-muted-foreground font-medium">Last Updated: April 30, 2026</p>
              </div>
            </div>

            <div className="space-y-8 text-foreground/80 leading-relaxed text-base">
              <p>
                Welcome to <span className="font-bold text-primary">DECODETECH</span> ("we", "our", "us").
                We are committed to protecting your privacy and ensuring that your personal information is handled securely and responsibly.
              </p>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm">1</span>
                  Information We Collect
                </h2>
                <p>We may collect the following types of information:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li><span className="font-semibold text-foreground">Personal Information:</span> Name, phone number, email address</li>
                  <li><span className="font-semibold text-foreground">Communication Data:</span> Messages and interactions via WhatsApp or other platforms</li>
                  <li><span className="font-semibold text-foreground">Usage Data:</span> Interaction with our services and communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm">2</span>
                  How We Use Your Information
                </h2>
                <p>We use your information to:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Provide customer support</li>
                  <li>Send updates, notifications, and service-related messages</li>
                  <li>Send marketing or promotional messages (if applicable)</li>
                  <li>Improve our services and communication</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm">3</span>
                  WhatsApp Communication
                </h2>
                <p>
                  By providing your phone number, you agree to receive messages from DECODETECH via WhatsApp.
                  These messages may include updates, alerts, and promotional content.
                </p>
                <p className="mt-3">
                  You can opt out at any time by replying <span className="font-bold text-primary">"STOP"</span> or contacting us directly.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm">4</span>
                  Data Sharing and Disclosure
                </h2>
                <p>
                  We do not sell, trade, or rent your personal information.
                </p>
                <p className="mt-3">
                  We may share your data with:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Service providers (such as messaging platforms)</li>
                  <li>Legal authorities if required by law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm">5</span>
                  Data Security
                </h2>
                <p>
                  We implement appropriate security measures to protect your data from unauthorized access, misuse, or loss.
                  However, no method of transmission over the internet is completely secure.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm">6</span>
                  Data Retention
                </h2>
                <p>
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy
                  or to comply with legal obligations.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm">7</span>
                  Your Rights
                </h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Access your personal data</li>
                  <li>Request correction or deletion</li>
                  <li>Opt out of communications at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm">8</span>
                  Third-Party Services
                </h2>
                <p>
                  We may use third-party services to operate our business (such as messaging APIs).
                  These providers may process your data according to their own privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm">9</span>
                  Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time.
                  Updates will be posted on this page with a revised date.
                </p>
              </section>

              <section className="pt-10 border-t border-border/60">
                <h2 className="text-xl font-bold text-foreground mb-4">10. Contact Us</h2>
                <p className="mb-4">If you have any questions or concerns, you can contact us:</p>
                <div className="bg-primary/5 p-6 rounded-2xl space-y-2">
                  <p><span className="font-bold text-primary">DECODETECH</span></p>
                  <p><span className="font-medium">Email:</span> info@dcodetech.in</p>
                  <p><span className="font-medium">Phone:</span> +91 865 596 6336</p>
                  <p><span className="font-medium">Address:</span> 1/105, Navrang Arcade, Gokhale Road, Thane West</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
