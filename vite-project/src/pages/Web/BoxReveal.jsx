import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/magicui/box-reveal";

export  function BoxRevealDemo() {
  return (
    <div className="h-full w-full max-w-[32rem] flex flex-col items-center justify-center overflow-hidden pt-8 ">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[2.5rem] font-semibold text-[#e6467b]">
          WELCOME
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
          HAPPY TO HAVE YOU IN TOYTIDE
          </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-[1.5rem]">
          <p>
            Explore toys for kids,with best quality and Offers
             <br />
            -&gt; 100% open-source, and customizable. <br />
          </p>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <Button className="mt-[1.6rem]  text-[#e6467b]">Explore</Button>
      </BoxReveal>
    </div>
  );
}
