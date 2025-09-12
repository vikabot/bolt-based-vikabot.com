---
layout: default
title: Home
---

<section class="pt-20 min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-white">
    <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
            <div class="flex items-center justify-center mb-8">
                <svg class="w-12 h-12 text-black mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <h1 class="text-5xl md:text-7xl font-bold leading-tight">
                    Vika<span class="text-gray-600">Bot</span>
                </h1>
            </div>
            
            <h2 class="text-xl md:text-2xl font-light text-gray-700 mb-8 leading-relaxed">
                {{ site.tagline }}
            </h2>
            
            <p class="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
                {{ site.description }}
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="{{ '/products/' | relative_url }}" class="bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors">
                    Explore Products
                </a>
                <a href="{{ '/contact/' | relative_url }}" class="border border-black px-8 py-4 hover:bg-black hover:text-white transition-colors">
                    Get Started
                </a>
            </div>
        </div>
    </div>
</section>

<section class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-4xl md:text-5xl font-bold mb-12 text-center">About VIKABot</h2>
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <p class="text-lg text-gray-700 mb-6">
                        VikaBot is a leading AI hardware infrastructure company specializing in complete IT solutions, 
                        mobile AI application testing, and high-end IT recruitment consultancy.
                    </p>
                    <p class="text-lg text-gray-700 mb-6">
                        We bridge the gap between cutting-edge AI hardware and practical business applications, 
                        ensuring our clients stay ahead in the rapidly evolving technology landscape.
                    </p>
                    <div class="space-y-4">
                        <div class="flex items-center">
                            <div class="w-2 h-2 bg-black rounded-full mr-4"></div>
                            <span>Expert hardware integration and deployment</span>
                        </div>
                        <div class="flex items-center">
                            <div class="w-2 h-2 bg-black rounded-full mr-4"></div>
                            <span>Comprehensive AI testing and certification</span>
                        </div>
                        <div class="flex items-center">
                            <div class="w-2 h-2 bg-black rounded-full mr-4"></div>
                            <span>Specialized IT talent acquisition</span>
                        </div>
                    </div>
                </div>
                <div class="bg-white p-8 shadow-lg">
                    <h3 class="text-2xl font-bold mb-4">Our Mission</h3>
                    <p class="text-gray-700">
                        To empower businesses with robust AI hardware infrastructure and expert services 
                        that drive innovation and operational excellence in the digital age.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
