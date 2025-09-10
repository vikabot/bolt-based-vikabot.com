---
layout: default
title: Contact
permalink: /contact/
---

<section class="pt-32 pb-20 bg-white">
    <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
            <h1 class="text-4xl md:text-5xl font-bold mb-12 text-center">Get In Touch</h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-16 leading-relaxed">
                Ready to discuss your AI hardware infrastructure needs? Contact us for a consultation.
            </p>

            <div class="grid lg:grid-cols-2 gap-12">
                <div class="space-y-8">
                    <div>
                        <h2 class="text-2xl font-bold mb-6">Contact Information</h2>
                        
                        <div class="space-y-6">
                            <div class="flex items-start space-x-4">
                                <svg class="w-6 h-6 text-black flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                <div>
                                    <h3 class="font-semibold text-black mb-1">Email</h3>
                                    <p class="text-gray-600">{{ site.email }}</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start space-x-4">
                                <svg class="w-6 h-6 text-black flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                <div>
                                    <h3 class="font-semibold text-black mb-1">Phone</h3>
                                    <p class="text-gray-600">Available upon request</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start space-x-4">
                                <svg class="w-6 h-6 text-black flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <div>
                                    <h3 class="font-semibold text-black mb-1">Location</h3>
                                    <p class="text-gray-600">Serving clients globally</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gray-50 p-6 border border-gray-200">
                        <h3 class="font-bold text-black mb-4">Business Hours</h3>
                        <div class="space-y-2 text-gray-600">
                            <div class="flex justify-between">
                                <span>Monday - Friday</span>
                                <span>9:00 AM - 6:00 PM</span>
                            </div>
                            <div class="flex justify-between">
                                <span>Saturday</span>
                                <span>10:00 AM - 2:00 PM</span>
                            </div>
                            <div class="flex justify-between">
                                <span>Sunday</span>
                                <span>Closed</span>
                            </div>
                            <p class="text-sm mt-4">Emergency support available 24/7 for AMC customers</p>
                        </div>
                    </div>
                </div>

                <div class="bg-gray-50 p-8 border border-gray-200">
                    <form id="contact-form" onsubmit="handleSubmit(event)">
                        <div class="space-y-6">
                            <div class="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label for="name" class="block text-sm font-medium text-black mb-2">Name *</label>
                                    <input type="text" id="name" name="name" required class="w-full p-3 border border-gray-300 focus:border-black focus:outline-none transition-colors">
                                </div>
                                <div>
                                    <label for="email" class="block text-sm font-medium text-black mb-2">Email *</label>
                                    <input type="email" id="email" name="email" required class="w-full p-3 border border-gray-300 focus:border-black focus:outline-none transition-colors">
                                </div>
                            </div>
                            
                            <div>
                                <label for="company" class="block text-sm font-medium text-black mb-2">Company</label>
                                <input type="text" id="company" name="company" class="w-full p-3 border border-gray-300 focus:border-black focus:outline-none transition-colors">
                            </div>
                            
                            <div>
                                <label for="subject" class="block text-sm font-medium text-black mb-2">Subject *</label>
                                <select id="subject" name="subject" required class="w-full p-3 border border-gray-300 focus:border-black focus:outline-none transition-colors">
                                    <option value="">Select a subject</option>
                                    <option value="Hardware Solutions">Hardware Solutions</option>
                                    <option value="AI Testing Services">AI Testing Services</option>
                                    <option value="Recruitment Services">Recruitment Services</option>
                                    <option value="Technical Support">Technical Support</option>
                                    <option value="General Inquiry">General Inquiry</option>
                                </select>
                            </div>
                            
                            <div>
                                <label for="message" class="block text-sm font-medium text-black mb-2">Message *</label>
                                <textarea id="message" name="message" rows="5" required class="w-full p-3 border border-gray-300 focus:border-black focus:outline-none transition-colors resize-vertical" placeholder="Tell us about your requirements..."></textarea>
                            </div>
                            
                            <button type="submit" class="w-full bg-black text-white py-3 px-6 font-medium hover:bg-gray-800 transition-colors">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>