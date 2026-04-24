import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const images = [
  'https://cdn.poehali.dev/projects/695fb1c2-47ad-4d8a-8ea1-8245c0cb137e/bucket/5c93c369-5b1d-4adc-bf44-891791436b9f.jpg',
  'https://cdn.poehali.dev/projects/695fb1c2-47ad-4d8a-8ea1-8245c0cb137e/bucket/5d86433c-0924-4536-a8b3-13379b4692c7.jpg',
  'https://cdn.poehali.dev/projects/695fb1c2-47ad-4d8a-8ea1-8245c0cb137e/bucket/28a6766d-b58f-4b06-8eca-81cda62e110b.jpg',
  'https://cdn.poehali.dev/projects/695fb1c2-47ad-4d8a-8ea1-8245c0cb137e/bucket/a0e73867-1a56-42b7-9be6-11167bd49b8e.jpg',
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-10">

            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-12 bg-red-500" />
                <span className="text-red-500 text-sm font-medium uppercase tracking-widest">
                  Производитель
                </span>
              </div>
              <h1 className="text-5xl font-bold text-red-500 md:text-6xl lg:text-7xl tracking-tight">
                Фольманн
              </h1>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-200 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <p className="text-xl font-light text-white/80 md:text-2xl leading-relaxed">
                Промышленная химия для производителей
              </p>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-400 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="text-base text-white/60 leading-relaxed max-w-lg">
                <p className="mb-3">Сегодня производственный комплекс, расположенный в 35 км к востоку от Москвы в Богородском Индустриальном парке «Технопарк» (г. Ногинск), включает:</p>
                <ul className="space-y-1.5 list-none">
                  <li className="flex gap-2"><span className="text-red-500 mt-1">—</span><span>Современные многофункциональные технологические линии;</span></li>
                  <li className="flex gap-2"><span className="text-red-500 mt-1">—</span><span>Собственную лабораторию, оборудованную измерительными и испытательными инструментами;</span></li>
                  <li className="flex gap-2"><span className="text-red-500 mt-1">—</span><span>Высокотехнологичные складские помещения с управляемым микроклиматом, расположенные, помимо Подмосковья, в Санкт-Петербурге, Ростове-на-Дону и Новосибирске;</span></li>
                  <li className="flex gap-2"><span className="text-red-500 mt-1">—</span><span>Уникальный коллектив, способный генерировать идеи и воплощать их в жизнь — у нас работает больше 100 специалистов, 80% из них с высшим профильным образованием и успешным опытом работы в отрасли.</span></li>
                </ul>
              </div>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-500 ease-out flex gap-4',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 transition-colors duration-200"
              >
                Наша продукция
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 border border-white/40 hover:border-white text-white font-light px-6 py-3 transition-colors duration-200"
              >
                Связаться с нами
              </a>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-700 ease-out flex gap-12 pt-2',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div>
                <p className="text-2xl font-bold text-white">20+</p>
                <p className="text-sm text-white/50 mt-1">лет на рынке</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">500+</p>
                <p className="text-sm text-white/50 mt-1">клиентов</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">100+</p>
                <p className="text-sm text-white/50 mt-1">продуктов</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}