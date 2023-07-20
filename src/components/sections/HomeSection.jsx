export default function HomeSection({ children }) {
    return (
        <section className="w-full sm:h-full sm:min-h-[calc(100vh_-_85px)] flex text-center justify-center pt-20">
            {children}
        </section>
    );
}