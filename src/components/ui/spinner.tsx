import { cn } from "cn"
import MaterialProgressActivity from '~icons/material-symbols/progress-activity'

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <MaterialProgressActivity
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  )
}

export { Spinner }
