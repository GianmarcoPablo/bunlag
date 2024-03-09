

interface Props {
    params: {
        slug: string
    }
}

export default function JobPage({ params }: Props) {

    const { slug } = params

    return (
        <div>
            JobPage: {slug}
        </div>
    )
}
