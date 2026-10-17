// Single source of truth for business details. Fill in verified values only.
export const business = {
  name: "আশিক ইলেকট্রিক ওয়ার্কস এন্ড সার্ভিসিং সেন্টার",
  shortName: "আশিক ইলেকট্রিক",
  owner: "মোঃ ওয়াজেদ আলী",
  // International format, e.g. "+8801712345678". Leave empty until verified.
  phone: "",
  whatsapp: "",
  email: "",
  address: "সিংড়া রোড, জয়পুরহাট কলম, সিংড়া, নাটোর, বাংলাদেশ",
};

export const defaultWhatsAppMessage = `আসসালামু আলাইকুম। আমি ${business.name}ের সাথে যোগাযোগ করতে চাই।

আমার নাম:
মোটর/মেশিনের নাম:
মোটরের ক্ষমতা (HP):
সিঙ্গেল ফেজ / থ্রি ফেজ:
সমস্যার বিবরণ:

দয়া করে মেরামতের সম্ভাব্য খরচ ও পরবর্তী করণীয় সম্পর্কে জানাবেন। ধন্যবাদ।`;

const digits = (n: string) => n.replace(/[^\d+]/g, "");

export function telHref(): string | null {
  const n = digits(business.phone);
  return /^\+8801\d{9}$/.test(n) ? `tel:${n}` : null;
}

export function whatsappHref(message: string = defaultWhatsAppMessage): string | null {
  const n = digits(business.whatsapp).replace(/^\+/, "");
  return /^8801\d{9}$/.test(n)
    ? `https://wa.me/${n}?text=${encodeURIComponent(message)}`
    : null;
}

export const serviceMessage = (service: string) =>
  `আসসালামু আলাইকুম। আমি আপনাদের "${service}" সার্ভিস সম্পর্কে জানতে চাই। সম্ভাব্য খরচ ও কীভাবে মেশিনটি দেখাতে পারব, জানাবেন। ধন্যবাদ।`;
