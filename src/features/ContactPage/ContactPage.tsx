"use client";

import { useState } from "react";
import { useThemeStore } from "../../core/store";

export default function ContactPage() {
  const isLightTheme = useThemeStore((state) => state.useLightTheme);
  return (
    <section
      id="contact"
      className={`py-20 ${isLightTheme ? "bg-gray-50" : "bg-dark-nav"}`}
    >
      <div className="container mx-auto px-6">
        <HeaderText />
        <HeaderDescription isLightTheme={isLightTheme} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <SendMessageThroughEmail isLightTheme={isLightTheme} />
          <div className="flex flex-col justify-between">
            <ContactInfo isLightTheme={isLightTheme} />
            <FollowMe isLightTheme={isLightTheme} />
          </div>
        </div>
      </div>
    </section>
  );
}
function FollowMe({ isLightTheme }: { isLightTheme: boolean }) {
  return (
    <div
      className={`${isLightTheme ? "bg-white" : "bg-button-background"
        } rounded-lg shadow-md p-8`}
    >
      <h3 className="text-xl font-bold mb-6 text-[#1C77C3]">Follow Me</h3>
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
            className={`flex justify-center items-center ${index % 2 == 1 ? "bg-[#FF6B35]" : "bg-blue-me"
              }  text-white p-3 w-10 h-10 rounded-full transition-transform hover:scale-110 cursor-pointer`}
          >
            <i className={item.icon}></i>
          </a>
        ))}
      </div>
    </div>
  );
}

function ContactInfo({ isLightTheme }: { isLightTheme: boolean }) {
  return (
    <div
      className={`${isLightTheme ? "bg-white" : "bg-button-background"
        } rounded-lg shadow-md p-8 mb-8`}
    >
      <h3 className="text-xl font-bold mb-6 text-[#1C77C3]">
        Contact Information
      </h3>
      <div className="space-y-4">
        {[
          {
            icon: "fas fa-envelope text-white",
            text: "joelthousend@gmail.com",
            headerText: "Email",
          },
          {
            icon: "fas fa-map-marker-alt text-white",
            text: "Addis Ababa, Ethiopia",
            headerText: "Location",
          },
          {
            icon: "fas fa-phone text-white",
            text: "+251944032128",
            headerText: "Phone",
          },
        ].map((item) => (
          <ContactInfoItem
            key={item.headerText}
            isLightTheme={isLightTheme}
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
  isLightTheme,
}: {
  headerText: string;
  text: string;
  icon: string;
  isLightTheme: boolean;
}) {
  return (
    <div className="flex items-start group">
      <div className="transform group-hover:-translate-y-1 transition duration-300 group-hover:bg-orange-me group-hover:shadow-lg/35 bg-blue-me bg-opacity-10 p-3 w-10 flex justify-center items-center h-10 rounded-full mr-4">
        <i className={icon}></i>
      </div>
      <div>
        <h4
          className={`${isLightTheme ? "text-gray-600" : "text-blue-400"
            }  font-bold group-hover:text-orange-me duration-300 ease-in-out transition-all transform group-hover:-translate-y-1  group-hover:text-shadow-sm`}
        >
          {headerText}
        </h4>
        <p
          className={`${isLightTheme ? "text-gray-600" : "text-gray-200"
            } transform group-hover:-translate-y-1 duration-300 ease-in-out group-hover:text-shadow-sm transition-transform`}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

function SendMessageThroughEmail({ isLightTheme }: { isLightTheme: boolean }) {
  const handleEmailButtonClick = (
    subject: string,
    body: string,
    recipient: string
  ) => {
    // 1. Encode the components of the email
    const encodedRecipient = encodeURIComponent(recipient);
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    // 2. Construct the mailto URI
    // const mailtoUri = `mailto:${recipient}?subject=${encodedSubject}&body=${encodedBody}`;
    const gmailComposeUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=${encodedRecipient}&su=${encodedSubject}&body=${encodedBody}`;

    try {
      window.open(gmailComposeUrl, "_blank"); // '_blank' opens in a new tab/window
      alert(
        "Opening Gmail compose window. Please check your browser's new tab/window."
      );
      // Optional: Clear the form after triggering the link
      // setName("");
      // setEmail("");
      // setMessage("");
    } catch (error) {
      console.error("Error attempting to open webmail link:", error);
      alert(
        "An error occurred. Please ensure your browser allows pop-ups for this site."
      );
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div
      className={` ${isLightTheme ? "bg-white" : "bg-button-background"
        } rounded-lg shadow-md p-8`}
    >
      <h3 className="text-xl font-bold mb-6 text-[#1C77C3]">
        Send Me a Message
      </h3>
      <form>
        <div className="mb-6">
          <label
            htmlFor="name"
            className={`block ${isLightTheme ? "text-gray-700" : "text-gray-200"
              } mb-2`}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1C77C3] focus:border-transparent"
            placeholder="Your name"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className={`block ${isLightTheme ? "text-gray-700" : "text-gray-200"
              } mb-2`}
          >
            Email
          </label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            id="email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1C77C3] focus:border-transparent"
            placeholder="Your email address"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className={`block ${isLightTheme ? "text-gray-700" : "text-gray-200"
              } mb-2`}
          >
            Message
          </label>
          <textarea
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            id="message"
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1C77C3] focus:border-transparent"
            placeholder="Your message"
          ></textarea>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();

            if (
              email.trim().length <= 0 ||
              name.trim().length <= 0 ||
              message.trim().length <= 0
            ) {
              alert(
                "Please make sure to fill in all the black spaces on the form's input boxs "
              );
            }

            handleEmailButtonClick(
              `Sender's Name:${name} and Email:${email}`,
              message,
              "honourhq.app@gmail.com"
            );
          }}
          className="bg-[#FF6B35] hover:bg-[#e55a29] text-white py-3 px-8 rounded-lg transition-colors duration-300 w-full md:w-auto !rounded-button whitespace-nowrap cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

function HeaderDescription({ isLightTheme }: { isLightTheme: boolean }) {
  return (
    <p
      className={`${isLightTheme ? "text-gray-600" : "text-gray-200"
        } text-center max-w-2xl mx-auto mb-12`}
    >
      Have a{" "}
      <span className="text-orange-me font-bold italic">project in mind </span>
      or want to discuss{" "}
      <span className="text-blue-me font-bold italic">
        potential opportunities?
      </span>{" "}
      Feel free to reach out. I&apos;m always open to new{" "}
      <span className="text-orange-me font-bold italic">challenges</span> and{" "}
      <span className="text-blue-me font-bold italic">collaborations</span>.
    </p>
  );
}

function HeaderText() {
  return (
    <div className="flex justify-center gap-1.5 items-center flex-row">
      <h2 className="mr-1 text-orange-me text-3xl md:text-4xl font-bold text-center mb-4">
        Get
      </h2>
      <h2 className="text-blue-me text-3xl md:text-4xl font-bold text-center mb-4">
        InTouch
      </h2>
    </div>
  );
}
