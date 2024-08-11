
import React from 'react'
import Workflow from './workflow'
//import { onGetWorkflows } from '../_actions/workflow-connections'
//import MoreCredits from './more-creadits'
type Props={}
const Workflows = async(props:Props) => {
//  const workflows = await onGetWorkflows()

  return (
    <div className="relative flex flex-col gap-4">
        <section className="flex flex-col m-2">
            <Workflow
             description='hi create  worflow' id="75437483" name="harsh" publish={false}
            />

        </section>
    </div>
  )
}

export default Workflows