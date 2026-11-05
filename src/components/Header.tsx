import { Button, Card as HeaderCard, } from '@heroui/react'
import type { ReactNode } from 'react'

export interface HeaderProps {
    title: string
    description?: string
    icon?: ReactNode
    labelAction?: string
    onActions?: () => void
}

const Header = ({title, description, icon, labelAction, onActions}: HeaderProps) => {

    return (
        <HeaderCard className='bg-mist-200 h-25 shadow-none rounded-lg p-4'>
            <HeaderCard.Content className='flex flex-row justify-between font-outft'>
                <div className='flex flex-col '>
                    <div className="text-3xl font-black text-gradient">{title}</div>
                    <div className='text-[16px]/8 font-outfit'>{description}</div>
                </div>
                {labelAction && onActions && (
                    <Button onPress={onActions} className="flex flex-row gap-2">
                        {icon}
                        {labelAction}
                    </Button>
                )}
            </HeaderCard.Content>
        </HeaderCard>
    )
}

export default Header