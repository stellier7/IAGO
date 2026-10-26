type JsonLdScriptProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export default function JsonLdScript({ data }: JsonLdScriptProps) {
  const payload = Array.isArray(data)
    ? { "@context": "https://schema.org", "@graph": data }
    : data["@context"]
      ? data
      : { "@context": "https://schema.org", ...data };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(payload),
      }}
    />
  );
}
