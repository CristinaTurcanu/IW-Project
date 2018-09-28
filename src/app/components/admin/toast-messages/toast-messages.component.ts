import { debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-toast-messages',
  templateUrl: './toast-messages.component.html',
  styleUrls: ['./toast-messages.component.css']
})
export class ToastMessagesComponent implements  OnDestroy {
  message: any;
  subscription: Subscription;

  constructor(private toast: ToastService) {
      this.subscription = this.toast.getMessage()
        .subscribe(message => this.message = message);
        this.toast.getMessage().pipe(
          debounceTime(5000)
        ).subscribe(() => this.message = null);
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

}
