import { FormBuilder, FormGroup } from '@angular/forms';

export default class Startup {
  uid: string;
  name: string;
  filters: string;
  status: string;
  description: string;
  tags: string;
  logo: string;
  angellist: string;
  crunchbase: string;
  facebook: string;
  twitter: string;
  linkedin: string;
  website: string;
  email: string;
  people: string;
  lastUpdated: string;
  lastActivity: string;

  constructor(input) {
    this.uid = input && input.uid ? input.uid : '';
    this.name = input && input.name ? input.name : '';
    this.filters = input && input.filters ? input.filters : '';
    this.status = input && input.status ? input.status : '';
    this.description = input && input.description ? input.description : '';
    this.tags = input && input.tags ? input.tags : '';
    this.logo = input && input.logo ? input.logo : '';
    this.angellist = input && input.angellist ? input.angellist : '';
    this.crunchbase = input && input.crunchbase ? input.crunchbase : '';
    this.facebook = input && input.facebook ? input.facebook : '';
    this.twitter = input && input.twitter ? input.twitter : '';
    this.linkedin = input && input.linkedin ? input.linkedin : '';
    this.website = input && input.website ? input.website : '';
    this.email = input && input.email ? input.email : '';
    this.people = input && input.people ? this.processPeople(input.people) : '';
    this.lastUpdated = input && input.last_updated ? input.last_updated : '';
    this.lastActivity = input && input.last_activity ? input.last_activity : '';
  }

  getStripped() {
    return {
      name: this.name,
      filters: this.filters,
      status: this.status,
      description: this.description,
      tags: this.tags,
      logo: this.logo,
      angellist: this.angellist,
      crunchbase: this.crunchbase,
      facebook: this.facebook,
      twitter: this.twitter,
      linkedin: this.linkedin,
      website: this.website,
      email: this.email,
      people: this.people,
      lastUpdated: this.lastUpdated,
      lastActivity: this.lastActivity
    }
  }

  buildReactiveFormGroup(): FormGroup {
    const fb = new FormBuilder();

    return fb.group({
      name: this.name,
      filters: this.filters,
      status: this.status,
      description: this.description,
      tags: this.tags,
      logo: this.logo,
      angellist: this.angellist,
      crunchbase: this.crunchbase,
      facebook: this.facebook,
      twitter: this.twitter,
      linkedin: this.linkedin,
      website: this.website,
      email: this.email,
      people: this.people,
      lastUpdated: this.lastUpdated,
      lastActivity: this.lastActivity,
    })
  }

  private processPeople(people: string | string[]) {
    if (typeof people === 'object') {
      return people.join(', ');
    } else if (typeof people === 'string') {
      return people;
    }
  }
}
