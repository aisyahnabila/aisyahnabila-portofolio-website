import { ExternalLink, X } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from "./ui/dialog";
import systemAnalystCv from "../assets/cv_nabila/Aisyah Nabila_System Analyst.pdf";
import qualityAssuranceCv from "../assets/cv_nabila/Aisyah Nabila_Quality Assurance.pdf";
import technicalWriterCv from "../assets/cv_nabila/Aisyah Nabila_Technical Writer.pdf";

const RESUMES = [
  { role: "System Analyst", href: systemAnalystCv },
  { role: "Quality Assurance", href: qualityAssuranceCv },
  { role: "Technical Writer", href: technicalWriterCv },
];

interface ResumeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** id of the button that opens the dialog. ui/Button doesn't forward refs, so
   *  Radix can't return focus to it on its own — we do it by id instead. */
  triggerId: string;
}

export function ResumeDialog({ open, onOpenChange, triggerId }: ResumeDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        onCloseAutoFocus={(event) => {
          const trigger = document.getElementById(triggerId);
          if (trigger) {
            event.preventDefault();
            trigger.focus();
          }
        }}
        className="fixed inset-0 z-50 m-auto w-full h-fit border border-border rounded-lg bg-background shadow-lg p-0 overflow-hidden"
        style={{ maxWidth: 'min(28rem, calc(100% - 2rem))' }}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-border/50">
          <span className="text-xs font-semibold tracking-wide uppercase text-muted-foreground">
            Resume
          </span>
          <DialogClose className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-md outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]">
            Close
            <X className="h-4 w-4" />
          </DialogClose>
        </div>

        <div className="p-6">
          <DialogTitle className="text-lg font-semibold text-foreground">
            Choose my resume
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground mb-6">
            Pick the role you're hiring for. The PDF opens in a new tab, where you can download it.
          </DialogDescription>

          <ul className="flex flex-col gap-3">
            {RESUMES.map(({ role, href }) => (
              <li key={role}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-xl border border-border px-4 py-3 transition-colors duration-200 hover:border-primary/50 hover:bg-muted outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                >
                  <span className="min-w-0">
                    <span className="block font-semibold text-foreground">{role}</span>
                    <span className="block text-xs text-muted-foreground">PDF</span>
                  </span>
                  <ExternalLink
                    className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors duration-200"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
