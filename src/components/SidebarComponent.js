import React from 'react'

export const SidebarComponent = () => {
  return (
    <div>
        <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse">
              <div >
                <div class="list-group list-group-flush mx-3 mt-4">
                  <a href="/employees" id="employeeSide" class="list-group-item list-group-item-action py-2 ripple active" aria-current="true">
                    <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Employees</span>
                  </a>
                  <a href="/job-departments" id="jobDepartmentSide" class="list-group-item list-group-item-action py-2 ripple">
                    <i class="fas fa-chart-area fa-fw me-3"></i><span>Job Departments</span>
                  </a>
                </div>
              </div>
            </nav>
            </div>
  )
}
