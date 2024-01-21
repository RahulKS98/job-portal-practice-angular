import { Component, OnInit } from '@angular/core';
import { JobPortalService } from '../../services/job-portal.service';

@Component({
  selector: 'app-job-portal',
  templateUrl: './job-portal.component.html',
  styleUrls: ['./job-portal.component.css'],
})
export class JobPortalComponent implements OnInit {
  public jobs: any = [];
  public title: any = 'Hacker News Job Board';
  private tempJobs: any = [];
  public disableLoadButton: boolean = false;

  constructor(public jobPortalService: JobPortalService) {}

  ngOnInit(): void {
    this.getJobs();
  }

  /**
   * Get all jobs
   * @private
   */
  private getJobs() {
    this.jobPortalService.getJobPostings().subscribe({
      next: (data: any) => {
        this.tempJobs = data;
        this.loadMoreJobs(0);
      },
      error: (err: any) => {},
    });
  }

  /**
   * Load more jobs on load more button click
   * @param start
   */
  public loadMoreJobs(start: any) {
    const remainingJobs = this.tempJobs.length - start;
    const jobsToLoad = Math.min(6, remainingJobs);

    for (let i = start; i < start + jobsToLoad; i++) {
      this.getIndividualJob(this.tempJobs[i]);
    }

    this.disableLoadButton = start + jobsToLoad >= this.tempJobs.length;
  }

  /**
   * Logic to get individual job based on ID
   * @param id
   * @private
   */
  private getIndividualJob(id: any) {
    this.jobPortalService.getIndividualJobPosting(id).subscribe({
      next: (data: any) => {
        this.jobs.push(data);
      },
    });
  }
}
