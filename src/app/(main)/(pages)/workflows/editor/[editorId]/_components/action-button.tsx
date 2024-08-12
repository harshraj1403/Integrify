import React, { useCallback } from 'react'
import { Option } from './content-based-on-title'
import { ConnectionProviderProps } from '@/providers/connections-provider'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
 import { postContentToWebHook } from '@/app/(main)/(pages)/connections/_actions/discord-connection'
// import { onCreateNodeTemplate } from '../../../_actions/workflow-connections'

// import { onCreateNewPageInDatabase } from '@/app/(main)/(pages)/connections/_actions/notion-connection'
// import { postMessageToSlack } from '@/app/(main)/(pages)/connections/_actions/slack-connection'
import { toast } from 'sonner'


type Props={
    currentService: string
    nodeConnection: ConnectionProviderProps
    channels?: Option[]
    setChannels?: (value: Option[]) => void
}
const ActionButton = ({
    currentService,
    nodeConnection,
    channels,
    setChannels,
  }: Props) => {

    const pathname = usePathname()
    // const onSendDiscordMessage = useCallback(async () => {
    //     const response = await postContentToWebHook(
    //       nodeConnection.discordNode.content,
    //       nodeConnection.discordNode.webhookURL
    //     )
    
    //     if (response.message == 'success') {
    //       nodeConnection.setDiscordNode((prev: any) => ({
    //         ...prev,
    //         content: '',
    //       }))
    //     }
    //   }, [nodeConnection.discordNode])

  return (
    <div>ActionButton</div>
  )
}

export default ActionButton