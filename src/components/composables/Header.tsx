export function Headers({ title }: { title: string }) {
  return (
    <header className="w-full backg px-4 sm:px-6 py-6 sm:py-8 flex items-center justify-between text-white ">
      <div className="flex  text-white flex-col items-start justify-start gap-y-4">
        <h2 className="text-2xl sm:text-5xl font-semibold">{title}</h2>
        <div className="flex items-center gap-x-4">
          <p className="pr-4 font-medium text-base sm:text-xl border-r-2 border-white">
            Home
          </p>
          <p className="font-medium text-base sm:text-xl">{title}</p>
        </div>
      </div>

      <img
        src="https://trustflick.com/assets/landing/img/breadcrumb-img.png"
        className="hidden md:block object-contain w-[80%]"
      />
    </header>
  );
}
