import { useState } from 'react';
import { MainLayout } from '../components/layout/MainLayout';
import svgPaths from '../../imports/svg-xmc1gi6xw8';
import { t } from '../utils/translations';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    topic: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setSubmitStatus('success');

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        subject: '',
        topic: '',
        email: '',
        phone: '',
        message: '',
      });
      setSubmitStatus('idle');
    }, 3000);
  };

  return (
    <MainLayout>
      <div className="flex w-full flex-col items-start gap-8 bg-white dark:bg-gray-900 py-10">
        {/* Heading */}
        <section className="flex w-full flex-col items-center justify-center px-4">
          <div className="flex w-full max-w-[var(--content-max-width)] flex-col gap-6">
            <h1 className="font-['Overpass_Mono',sans-serif] text-[var(--text-3xl)] font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)]">
              {t('contact.title')}
            </h1>
            <p className="font-['Overpass',sans-serif] font-light text-black dark:text-white">
              {t('contact.description')}
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="flex w-full flex-col items-center justify-center px-4">
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-[860px] flex-col gap-2 rounded-2xl border-2 border-[var(--color-border)] dark:border-gray-700 bg-white dark:bg-gray-800 p-6"
          >
            {/* Name */}
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="font-['Overpass',sans-serif] font-bold text-2xl text-black dark:text-white">
                {t('contact.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="h-[45px] rounded-lg border border-[var(--color-border)] dark:border-gray-700 bg-[var(--color-gray-100)] dark:bg-gray-700 px-3 text-black dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] dark:focus:ring-[var(--color-secondary)]"
              />
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-1">
              <label htmlFor="subject" className="font-['Overpass',sans-serif] font-bold text-2xl text-black dark:text-white">
                {t('contact.subject')}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="h-[45px] rounded-lg border border-[var(--color-border)] dark:border-gray-700 bg-[var(--color-gray-100)] dark:bg-gray-700 px-3 text-black dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] dark:focus:ring-[var(--color-secondary)]"
              />
            </div>

            {/* Topic */}
            <div className="flex flex-col gap-1">
              <label htmlFor="topic" className="font-['Overpass',sans-serif] font-bold text-2xl text-black dark:text-white">
                {t('contact.topic')}
              </label>
              <input
                type="text"
                id="topic"
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                required
                className="h-[45px] rounded-lg border border-[var(--color-border)] dark:border-gray-700 bg-[var(--color-gray-100)] dark:bg-gray-700 px-3 text-black dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] dark:focus:ring-[var(--color-secondary)]"
              />
            </div>

            {/* Email and Phone */}
            <div className="flex flex-col gap-2 md:flex-row">
              <div className="flex flex-1 flex-col gap-1">
                <label htmlFor="email" className="font-['Overpass',sans-serif] font-bold text-2xl text-black dark:text-white">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-[45px] rounded-lg border border-[var(--color-border)] dark:border-gray-700 bg-[var(--color-gray-100)] dark:bg-gray-700 px-3 text-black dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] dark:focus:ring-[var(--color-secondary)]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <label htmlFor="phone" className="font-['Overpass',sans-serif] font-bold text-2xl text-black dark:text-white">
                  {t('contact.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-[45px] rounded-lg border border-[var(--color-border)] dark:border-gray-700 bg-[var(--color-gray-100)] dark:bg-gray-700 px-3 text-black dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] dark:focus:ring-[var(--color-secondary)]"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="font-['Overpass',sans-serif] font-bold text-2xl text-black dark:text-white">
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={10}
                className="rounded-lg border border-[var(--color-border)] dark:border-gray-700 bg-[var(--color-gray-100)] dark:bg-gray-700 p-3 text-black dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] dark:focus:ring-[var(--color-secondary)] resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 rounded-lg bg-[var(--color-secondary)] px-4 py-4 font-['Overpass',sans-serif] font-medium text-[var(--text-xl)] text-[var(--color-primary)] transition-all hover:opacity-90 active:scale-98 disabled:opacity-50"
            >
              {isSubmitting ? 'Gönderiliyor...' : t('contact.send')}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <p className="mt-2 text-center font-['Overpass',sans-serif] text-green-600 dark:text-green-400">
                ✓ Mesajınız başarıyla gönderildi!
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="mt-2 text-center font-['Overpass',sans-serif] text-red-600 dark:text-red-400">
                ✗ Bir hata oluştu. Lütfen tekrar deneyin.
              </p>
            )}
          </form>
        </section>

        {/* Contact Info */}
        <section className="flex w-full flex-col items-center justify-center px-4">
          <div className="flex w-full max-w-[var(--content-max-width)] flex-col gap-6">
            {/* Email */}
            <div className="flex items-end gap-4">
              <svg className="size-10 shrink-0" fill="none" viewBox="0 0 40 32">
                <path d={svgPaths.p2d133480} fill="var(--color-primary)" className="dark:fill-[var(--color-secondary)]" />
              </svg>
              <a
                href="mailto:patronsuzlarkoop@gmail.com"
                className="font-['Overpass',sans-serif] font-light text-[var(--text-3xl)] text-[var(--color-primary)] dark:text-[var(--color-secondary)] hover:underline"
              >
                patronsuzlarkoop@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <svg className="size-10 shrink-0" fill="none" viewBox="0 0 26 40">
                <path d={svgPaths.p1c8ad00} fill="var(--color-primary)" className="dark:fill-[var(--color-secondary)]" />
              </svg>
              <a
                href="tel:+905424089034"
                className="font-['Overpass',sans-serif] font-light text-[var(--text-3xl)] text-[var(--color-primary)] dark:text-[var(--color-secondary)] hover:underline"
              >
                +905424089034
              </a>
            </div>

            {/* Note */}
            <p className="text-center font-['Overpass',sans-serif] font-semibold text-black dark:text-white">
              {t('contact.note')}
            </p>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
