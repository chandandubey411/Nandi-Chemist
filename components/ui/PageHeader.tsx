interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-secondary py-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-text mb-3">
          {title}
        </h1>
        {description && (
          <p className="text-lg text-gray-700 max-w-3xl">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
