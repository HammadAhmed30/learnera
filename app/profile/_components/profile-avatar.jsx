import { MediumHeading } from '@/components/heading/heading-medium'
import { Paragraph } from '@/components/reuseable-paragraph'
import { FaUserAlt } from "react-icons/fa";


export default function ProfileAvatar() {
  return (
    <div className='w-full flex items-center flex-col md:flex-row'>
        <div className='w-[150px] h-[150px] rounded-full overflow-hidden border-[1px] border-foreground pt-[20px]'>
            <FaUserAlt className='w-full h-full text-foreground' />
        </div>
        <div className='md:ml-ElementSpace md:mt-0 mt-ElementSpace md:text-left text-center'>
            <MediumHeading>Name : 30 lazer</MediumHeading>
            <Paragraph className={"mt-NormalSpace"}>Email : 30lazers@gmail.com</Paragraph>
        </div>
    </div>
  )
}
