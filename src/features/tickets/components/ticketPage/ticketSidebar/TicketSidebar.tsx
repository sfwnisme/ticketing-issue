import { Folder, History, Info } from 'lucide-react'
import Badge from '../../../../../components/badge/Badge'
import Divider from '../../../../../components/divider/Divider'
import FileChip from '../../../../../components/fileChip/FileChip'
import { TICKET_STATUS_COLORS } from '../../../../../constraints/constraints'
import { formatedDate } from '../../../../../libs/formated-date'
import { ITicket } from '../../../../../types/types'
import Style from './TicketSidebar.module.css'
import HelpText from '../../../../../components/helpText/HelpText'
import SelectStatusForm from '../../../forms/selectStatusForm/SelectStatusForm'
import { useState } from 'react'
import Button from '../../../../../components/button/Button'
import { Visible } from '@sfwnisme/visi'
type Props = {
  ticket: ITicket,
}

export default function TicketSidebar({ ticket }: Props) {
  const [isStatusEdit, setIsStatusEdit] = useState(false)

  return (
    <div className={Style['ticket-sidebar']}>
      <div className={Style['ticket-sidebar__info']}>
        <h4 className={Style['ticket-sidebar__title']}><Info size={18} />Ticket Info</h4>
        <div className={Style['ticket-sidebar__header']}>
          <strong>Ticket id</strong>
          <p className={Style['ticket-sidebar__ticket-id']}>{ticket?._id}</p>
          <strong>Author</strong>
          <p className={Style['ticket-sidebar__author']}>{ticket?.createdBy?.name ?? ""}</p>
          <strong>Assigned to</strong>
          <p className={Style['ticket-sidebar__assignee']}>{ticket?.assignedTo?.name ?? <Badge variant='warning' text="public" dot />}</p>
          <strong>Department</strong>
          <p className={Style['ticket-sidebar__assignee']}>{ticket?.department?.title ?? <Badge variant='warning' text="public" dot />}</p>
          <strong>Created on</strong>
          <p className={Style['ticket-sidebar__create-date']}>{formatedDate(ticket?.createdAt)}</p>
          <strong>Last update</strong>
          <p className={Style['ticket-sidebar__update-date']}>{formatedDate(ticket?.updatedAt)}</p>
        </div>
        <Divider />
        <div className={Style['ticket-sidebar__body']}>
          <strong>Status</strong>
          <div style={{ display: "flex", justifyContent: 'space-between', width: '100%' }}>
            {
              !isStatusEdit
                ?
                <Badge variant={TICKET_STATUS_COLORS[ticket?.status]} text={ticket?.status} />
                :
                <div>
                  <SelectStatusForm defaultValue={ticket.status} ticketId={ticket._id} />
                </div>
            }
            <Button variant={!isStatusEdit ? 'info' : 'danger'} shape='none' size='xs' onClick={() => setIsStatusEdit(prev => !prev)}>{!isStatusEdit ? 'Edit' : 'Close'}</Button>
          </div>
        </div>
        <Visible when={ticket.tags.length > 0}>
          <Divider />
          <div className={Style['ticket-sidebar__footer']}>
            <strong>Tags</strong>
            {
              ticket.tags.map((tag) => (
                <Badge customColor={tag?.color} text={tag?.name} key={tag._id} />
              ))
            }
          </div>
        </Visible>
      </div>
      <div className={Style['ticket-sidebar__files']}>
        <h4 className={Style['ticket-sidebar__title']}><Folder size={18} /> Attachments</h4>
        <FileChip name='profile.png' size='3Mb' />
        <FileChip name='profile.png' size='3Mb' />
        <FileChip name='profile.png' size='3Mb' />
        <FileChip name='profile.png' size='3Mb' />
      </div>
      <div className={Style['ticket-sidebar__log']}>
        <h4 className={Style['ticket-sidebar__title']}><History size={18} /> History</h4>
        {/* <ul>
          <li>- [10:42] Ticket created by Agent Smith (Priority: High)</li>
          <li>- [10:45] Category changed from "Billing" to "Technical Support"</li>
          <li>- [10:47] Assigned to Specialist Team (Group: Tier 2 Support)</li>
          <li>- [10:47] Assigned to Specialist Team (Group: Tier 2 Support)</li>
          <li>- [10:47] Assigned to Specialist Team (Group: Tier 2 Support)</li>
          <li>- [10:47] Assigned to Specialist Team (Group: Tier 2 Support)</li>
          <li>- [10:50] Customer provided additional error screenshots</li>
          <li>- [11:15] Solution suggested: Clear cache and reset credentials</li>
          <li>- [11:30] Customer confirmed issue resolved</li>
          <li>- [11:32] Ticket closed (Resolution: Fixed)</li>
        </ul> */}
        <HelpText icon='visible'>In the next version this will be updated</HelpText>
      </div>
    </div>
  )
}