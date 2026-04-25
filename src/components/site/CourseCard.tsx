import { Link } from "@tanstack/react-router";
import { Clock, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Course {
  slug: string;
  title: string;
  image: string;
  duration: string;
  level?: string;
  highlights: string[];
}

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group card-hover bg-card rounded-2xl overflow-hidden shadow-soft border border-border/50 flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {course.level && (
          <span className="absolute top-3 left-3 glass px-3 py-1 rounded-full text-xs font-medium">
            {course.level}
          </span>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-bold text-lg mb-3">{course.title}</h3>
        <ul className="space-y-2 mb-4 flex-1">
          {course.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-primary-glow mt-0.5 shrink-0" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between pt-4 border-t border-border/60">
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" /> {course.duration}
          </span>
          <Button asChild size="sm" variant="ghost" className="group/btn">
            <Link to="/contact">
              View Details
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
