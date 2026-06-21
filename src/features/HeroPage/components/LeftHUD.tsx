const socials = [
  {
    label: "REDDIT_NODE",
    handle: "u/joelwillseek",
    icon: "fa-brands fa-reddit",
    href: "https://www.reddit.com/user/joelwillseek/",
  },
  {
    label: "LINKEDIN_NET",
    handle: "eyoel-seleshi",
    icon: "fa-brands fa-linkedin-in",
    href: "https://www.linkedin.com/in/eyoel-seleshi-6511b1356",
  },
  {
    label: "EMAIL_CHANNEL",
    handle: "joelthousend@gmail.com",
    icon: "fa-solid fa-envelope",
    href: "mailto:joelthousend@gmail.com",
  },
  {
    label: "WHATSAPP_LINK",
    handle: "+251 944 032 128",
    icon: "fa-brands fa-whatsapp",
    href: "https://wa.me/251944032128",
  },
  {
    label: "PHONE_LINE",
    handle: "+251 944 032 128",
    icon: "fa-solid fa-phone",
    href: "tel:+251944032128",
  },
];

export default function LeftHUD() {
  return (
    <div className="hidden lg:flex flex-col absolute left-8 top-1/2 -translate-y-1/2 space-y-6 border-l border-outline-variant pl-4">
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target={s.href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="group space-y-1 hover:border-l hover:border-primary hover:pl-2 transition-all duration-200"
        >
          <p className="font-label-sm text-[10px] text-outline uppercase tracking-widest group-hover:text-primary transition-colors">
            {s.label}
          </p>
          <p className="font-code-snippet text-[13px] text-on-surface group-hover:text-primary transition-colors flex items-center gap-2">
            <i className={`${s.icon} text-primary/60 group-hover:text-primary transition-colors`} />
            {s.handle}
          </p>
        </a>
      ))}
    </div>
  );
}
