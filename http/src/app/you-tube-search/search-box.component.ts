import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResult } from './search-result.model';
import { YouTubeSearchService } from './you-tube-search.service';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators'
import { filter } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { switchAll } from 'rxjs/operators';


@Component({
    selector: 'app-search-box',
    template: `
        <input type = "text" class = "form-control" placeholder = "Search" autofocus>
    `
})

export class SearchBoxComponent implements OnInit {
    @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>(); 

    constructor(private youtube: YouTubeSearchService, private el: ElementRef) { }

    ngOnInit(): void {
        fromEvent(this.el.nativeElement, 'keyup').pipe(
            map((e: any) => e.target.value)).pipe(
            filter((text: string) => text.length > 1)).pipe(
            debounceTime(250)).pipe(
            tap(() => this.loading.emit(true))).pipe(
            map((query: string) => this.youtube.search(query))).pipe(
            switchAll())
            .subscribe(
                (results: SearchResult[]) => {
                    this.loading.emit(false);
                    this.results.emit(results);
                },
                (err: any) => {
                    console.log(err);
                    this.loading.emit(false);
                },
                () => {
                    this.loading.emit(false);
                }
            )
    }
}