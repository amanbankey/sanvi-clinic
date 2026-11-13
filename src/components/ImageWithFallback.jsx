import { useState } from "react"
import { ImageOff } from "lucide-react"

export default function ImageWithFallback({ src, alt, className = "", ...props }) {
  const [errored, setErrored] = useState(false)

  if (errored) {
    return (
      <div
        className={`flex items-center justify-center bg-soft-mint text-muted-text ${className}`}
      >
        <ImageOff size={32} />
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setErrored(true)}
      className={className}
      {...props}
    />
  )
}
