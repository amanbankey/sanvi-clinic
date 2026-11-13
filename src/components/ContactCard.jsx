export default function ContactCard({ icon: Icon, title, children, action }) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-border bg-white p-6 shadow-sm hover:shadow-md hover:border-accent/40 transition-all duration-300">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-soft-mint text-accent">
        <Icon size={22} />
      </div>
      <h3 className="font-heading font-semibold text-primary text-lg">{title}</h3>
      <div className="text-sm text-muted-text leading-relaxed">{children}</div>
      {action}
    </div>
  )
}
