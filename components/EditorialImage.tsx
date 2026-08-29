/* Casa de Areia — moldura editorial reutilizável: preserva a foto e recebe foco/encaixe da fonte central. */
import type { CSSProperties, ReactNode } from "react";
import type { ImagePresentation } from "@/lib/data";

type ImageStyle = CSSProperties & {
  "--img-focus"?: string;
  "--img-focus-mobile"?: string;
  "--img-fit"?: string;
  "--img-fit-mobile"?: string;
  "--img-bg"?: string;
};

type EditorialImageProps = ImagePresentation & {
  src: string;
  alt: string;
  className: string;
  children?: ReactNode;
};

export function EditorialImage({ src, alt, className, children, imageFocus = "right center", imageFocusMobile, imageFit = "cover", imageFitMobile = "contain", imageBackground = "#29433b" }: EditorialImageProps) {
  const style: ImageStyle = {
    "--img-focus": imageFocus,
    "--img-focus-mobile": imageFocusMobile ?? imageFocus,
    "--img-fit": imageFit,
    "--img-fit-mobile": imageFitMobile,
    "--img-bg": imageBackground,
  };

  return <div className={className} style={style}><img src={src} alt={alt} loading="eager" decoding="async" />{children}</div>;
}
