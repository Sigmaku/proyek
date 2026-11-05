import { useLocation } from '@tanstack/react-router'
import { headerData } from '../../../lib/dataHeader'
import Header from '../../../components/Header'

interface HeaderPagingProps {
    onActions?:() => void
}

const HeaderPaging = ({onActions}: HeaderPagingProps) => {
    const pathname = useLocation({ select: (location) => location.pathname })

    const current = headerData.find((item) =>
        item.to === '/' ? pathname === '/' : pathname.startsWith(item.to),
    )

    if (!current) return null

    const Icon = current.actionIcon
    return (
        <Header
            title={current.title}
            description={current.description}
            icon={Icon && <Icon size={16} />}
            labelAction={current.actionLabel}
            onActions={onActions}
        />
    )
}

export default HeaderPaging