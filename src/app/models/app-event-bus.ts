
export const AppEventBus = {
  state : {
    currentUser: 'state:currentUser'
  },
  structure : {
    navbar: 'structure:navbar'
  },
  design : {
    darkMode: 'design:darkMode'
  },
  notify: {
    toast: 'notify:toast'
  },
  user: {
    findUser: 'user:findUser',
    organization: 'user:organization',
    reload: {
      organization: 'user:reload:organization',
      organizationServiceList: 'user:reload:organization:serviceList',
      organizationBranchList: 'user:reload:organization:branchList',
      individual: 'user:reload:individual',
      individualSkillList: 'user:reload:individualSkillList',
      individualProfessionList: 'user:reload:individualProfessionList',
    }
  },
  profile: {
    section: 'profile:section'
  },
  file: {
    profilePicture: 'file:profilePicture',
    backgroundPicture: 'file:backgroundPicture',
  },
  filter: {
    branches: `filter:branches`,
    services: `filter:services`,
    skills: 'filter:skills',
    professions: 'filter:professions',
  }
}
