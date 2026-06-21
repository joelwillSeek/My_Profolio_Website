"use client";

import { useState } from "react";
import ScrambleText from "../../components/ScrambleText";

export default function ContactPage() {
  return (
    <section id="contact" className="relative min-h-screen py-24 px-8 overflow-hidden z-10 flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto relative space-y-16">
        
        {/* Section Header */}
        <div className="flex items-end gap-4 border-b border-primary/30 pb-4 relative">
          <h2 className="font-headline-lg text-4xl text-on-surface uppercase tracking-tighter">
            <ScrambleText text="COMMUNICATION_LINK" trigger="in-view" speed={40} />
          </h2>
          <div className="absolute bottom-0 left-0 h-[2px] w-1/3 bg-primary" style={{ boxShadow: "0 0 15px #93ccff, 0 0 5px #93ccff" }} />
        </div>

        <HeaderDescription />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative border border-outline-variant bg-surface/40 backdrop-blur-md p-8">
          {/* Corner Accents */}
          <div className="absolute -top-[1px] -left-[1px] w-8 h-8 border-t-2 border-l-2 border-primary" style={{ boxShadow: "-2px -2px 10px rgba(147,204,255,0.3)" }} />
          <div className="absolute -bottom-[1px] -right-[1px] w-8 h-8 border-b-2 border-r-2 border-primary" style={{ boxShadow: "2px 2px 10px rgba(147,204,255,0.3)" }} />
          <div className="absolute -top-[1px] -right-[1px] w-8 h-8 border-t-2 border-r-2 border-outline-variant" />
          <div className="absolute -bottom-[1px] -left-[1px] w-8 h-8 border-b-2 border-l-2 border-outline-variant" />

          <SendMessageThroughEmail />
          
          <div className="flex flex-col gap-12">
            <ContactInfo />
            <FollowMe />
          </div>
        </div>

        {/* Footer / Thank You message */}
        <div className="mt-24 text-center border-t border-outline-variant/50 pt-12 pb-8">
           <h3 className="font-headline-md text-primary text-xl mb-4 tracking-widest uppercase">
             <ScrambleText text="CONNECTION_TERMINATED // THANK_YOU" trigger="in-view" speed={60} />
           </h3>
           <p className="font-code-snippet text-on-surface-variant text-sm">
             System Log: User navigation complete. Have a great day.
           </p>
        </div>

      </div>
    </section>
  );
}

function FollowMe() {
  return (
    <div>
      <h3 className="font-headline-md text-xl font-bold mb-6 text-on-surface uppercase tracking-widest">
        SOCIAL_NODES
      </h3>
      <div className="flex space-x-4">
        {[
          { icon: "fab fa-github", link: "https://github.com/joelwillSeek" },
          {
            icon: "fab fa-linkedin-in",
            link: "https://www.linkedin.com/in/eyoel-seleshi-6511b1356",
          },
          {
            icon: "fab fa-reddit",
            link: "https://www.reddit.com/user/joelwillseek/",
          },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            className="flex justify-center items-center bg-primary/10 border border-primary/50 text-primary p-3 w-12 h-12 rounded-sm transition-all hover:bg-primary hover:text-on-primary hover:scale-110 cursor-pointer hover:shadow-[0_0_15px_#93ccff]"
          >
            <i className={`${item.icon} text-lg`}></i>
          </a>
        ))}
      </div>
    </div>
  );
}

function ContactInfo() {
  return (
    <div>
      <h3 className="font-headline-md text-xl font-bold mb-6 text-on-surface uppercase tracking-widest">
        CONTACT_DATA
      </h3>
      <div className="space-y-6">
        {[
          {
            icon: "fas fa-envelope",
            text: "joelthousend@gmail.com",
            headerText: "EMAIL_PROTOCOL",
          },
          {
            icon: "fas fa-map-marker-alt",
            text: "Addis Ababa, Ethiopia",
            headerText: "PHYSICAL_LOCATION",
          },
          {
            icon: "fas fa-phone",
            text: "+251944032128",
            headerText: "VOICE_COMMS",
          },
        ].map((item) => (
          <ContactInfoItem
            key={item.headerText}
            icon={item.icon}
            text={item.text}
            headerText={item.headerText}
          />
        ))}
      </div>
    </div>
  );
}

function ContactInfoItem({
  headerText,
  text,
  icon,
}: {
  headerText: string;
  text: string;
  icon: string;
}) {
  return (
    <div className="flex items-start group">
      <div className="bg-primary/10 border border-primary/30 p-3 w-12 h-12 flex justify-center items-center rounded-sm mr-4 group-hover:border-primary group-hover:shadow-[0_0_10px_rgba(147,204,255,0.3)] transition-all">
        <i className={`${icon} text-primary`}></i>
      </div>
      <div>
        <h4 className="font-label-sm text-primary uppercase tracking-widest text-[12px] mb-1">
          {headerText}
        </h4>
        <p className="font-code-snippet text-on-surface text-sm">
          {text}
        </p>
      </div>
    </div>
  );
}

function SendMessageThroughEmail() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailButtonClick = (
    subject: string,
    body: string,
    recipient: string
  ) => {
    const encodedRecipient = encodeURIComponent(recipient);
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    const gmailComposeUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=${encodedRecipient}&su=${encodedSubject}&body=${encodedBody}`;

    try {
      window.open(gmailComposeUrl, "_blank");
      alert("Opening Gmail compose window. Please check your browser's new tab/window.");
    } catch (error) {
      console.error("Error attempting to open webmail link:", error);
      alert("An error occurred. Please ensure your browser allows pop-ups for this site.");
    }
  };

  return (
    <div>
      <h3 className="font-headline-md text-xl font-bold mb-6 text-on-surface uppercase tracking-widest">
        TRANSMIT_MESSAGE
      </h3>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block font-label-sm text-outline uppercase tracking-widest text-[10px] mb-2">
            SENDER_ID
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 bg-surface/50 border border-outline-variant text-on-surface font-code-snippet focus:outline-none focus:border-primary focus:shadow-[0_0_10px_rgba(147,204,255,0.2)] transition-all"
            placeholder="[Enter your name]"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-label-sm text-outline uppercase tracking-widest text-[10px] mb-2">
            RETURN_ADDRESS
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            className="w-full px-4 py-3 bg-surface/50 border border-outline-variant text-on-surface font-code-snippet focus:outline-none focus:border-primary focus:shadow-[0_0_10px_rgba(147,204,255,0.2)] transition-all"
            placeholder="[Enter your email]"
          />
        </div>
        <div>
          <label htmlFor="message" className="block font-label-sm text-outline uppercase tracking-widest text-[10px] mb-2">
            PAYLOAD
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="message"
            rows={5}
            className="w-full px-4 py-3 bg-surface/50 border border-outline-variant text-on-surface font-code-snippet focus:outline-none focus:border-primary focus:shadow-[0_0_10px_rgba(147,204,255,0.2)] transition-all resize-none"
            placeholder="[Enter message data]"
          ></textarea>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            if (!email.trim() || !name.trim() || !message.trim()) {
              alert("SYSTEM ERROR: Please populate all required fields before transmission.");
              return;
            }
            handleEmailButtonClick(
              `Transmission from: ${name} [${email}]`,
              message,
              "joelthousend@gmail.com"
            );
          }}
          className="w-full px-8 py-4 border border-primary text-primary font-label-sm text-[12px] uppercase tracking-widest hover:bg-primary hover:text-on-primary hover:shadow-[0_0_15px_rgba(147,204,255,0.5)] transition-all flex items-center justify-center gap-2 group"
        >
          <span className="material-symbols-outlined text-[18px] group-hover:animate-pulse">send</span>
          INITIATE_TRANSFER
        </button>
      </form>
    </div>
  );
}

function HeaderDescription() {
  return (
    <p className="font-body-md text-on-surface-variant leading-relaxed max-w-2xl border-l-2 border-primary/50 pl-4 py-2">
      Have a <span className="text-primary">project in mind</span> or want to discuss <span className="text-primary">potential opportunities?</span> Feel free to reach out. The communication channels are open for new <span className="text-primary">challenges</span> and <span className="text-primary">collaborations</span>.
    </p>
  );
}
