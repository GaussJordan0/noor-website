import Image from "next/image";

export default function index() {
  return (
    <div>
      <h1 className="text-4xl font-oswald font-semibold text-c-mid-green mx-auto text-center">
        Über Uns
      </h1>

        <Image src="/illustration-4.svg" width={300} height={300} alt="About Image" className="rounded-2xl mx-auto" />
 
      <h2 className="text-center text-sm mx-auto mt-2">
        Wer wir sind und was uns ausmacht
      </h2>
      <div className="flex flex-col gap-2">
        <p className="text-sm w-[90%] mx-auto mt-4">
          <span className="font-bold text-xl">S</span>am Physiotherapie wurde im
          Jahr [year] von Sameh Elbehouti gegründet. Unser Ziel war es, einen
          Ort zu schaffen, an dem wir in einer angenehmen, persönlichen
          Atmosphäre arbeiten können – frei von der typischen klinischen
          Umgebung.
        </p>
      </div>
      <div className="relative w-[90%] mx-auto h-[200px] mt-4">
        <Image src="/img-1.jpeg" fill alt="About Image" className="rounded-2xl object-cover" />
      </div>
    </div>
  );
}
