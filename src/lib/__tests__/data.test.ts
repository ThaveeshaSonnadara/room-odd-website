import { projects, services, team, testimonials, processSteps, companyInfo } from '../data';

describe('Data Module Integrity', () => {
  it('contains valid company info', () => {
    expect(companyInfo.name).toBe('Room ODD');
    expect(companyInfo.email).toContain('@');
    expect(companyInfo.phone).toBeTruthy();
  });

  it('contains 6 services', () => {
    expect(services.length).toBe(6);
    services.forEach((s) => {
      expect(s.title).toBeTruthy();
      expect(s.index).toBeTruthy();
      expect(s.description).toBeTruthy();
    });
  });

  it('contains valid projects with unique slugs', () => {
    expect(projects.length).toBeGreaterThan(0);
    const slugs = projects.map((p) => p.slug);
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size).toBe(slugs.length);
  });

  it('contains 5 process steps in sequence', () => {
    expect(processSteps.length).toBe(5);
    expect(processSteps[0].number).toBe('01');
    expect(processSteps[4].number).toBe('05');
  });

  it('contains leadership team members', () => {
    expect(team.length).toBeGreaterThan(0);
    team.forEach((member) => {
      expect(member.name).toBeTruthy();
      expect(member.role).toBeTruthy();
    });
  });

  it('contains client testimonials', () => {
    expect(testimonials.length).toBeGreaterThan(0);
    testimonials.forEach((t) => {
      expect(t.quote).toBeTruthy();
      expect(t.client).toBeTruthy();
    });
  });
});
