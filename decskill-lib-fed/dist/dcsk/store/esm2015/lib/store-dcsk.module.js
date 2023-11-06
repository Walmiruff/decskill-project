import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { PostReducer } from './reducers/post_reducer';
import { StoreService } from './service/store.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
export class StoreDcskModule {
}
StoreDcskModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StoreDcskModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
StoreDcskModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StoreDcskModule, imports: [i1.StoreFeatureModule] });
StoreDcskModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StoreDcskModule, providers: [
        StoreService
    ], imports: [[
            StoreModule.forFeature('posts', PostReducer)
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StoreDcskModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        StoreModule.forFeature('posts', PostReducer)
                    ],
                    exports: [],
                    providers: [
                        StoreService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZGNzay5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kY3NrL3N0b3JlL3NyYy9saWIvc3RvcmUtZGNzay5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7OztBQWV2RCxNQUFNLE9BQU8sZUFBZTs7NkdBQWYsZUFBZTs4R0FBZixlQUFlOzhHQUFmLGVBQWUsYUFKZjtRQUNULFlBQVk7S0FDYixZQVBRO1lBQ1AsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDO1NBQzdDOzRGQU9VLGVBQWU7a0JBWjNCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLEVBQ2I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQztxQkFDN0M7b0JBQ0QsT0FBTyxFQUFFLEVBQ1I7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULFlBQVk7cUJBQ2I7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFBvc3RSZWR1Y2VyIH0gZnJvbSAnLi9yZWR1Y2Vycy9wb3N0X3JlZHVjZXInO1xuaW1wb3J0IHsgU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL3N0b3JlLnNlcnZpY2UnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZSgncG9zdHMnLCBQb3N0UmVkdWNlcilcbiAgXSxcbiAgZXhwb3J0czogW1xuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBTdG9yZVNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZURjc2tNb2R1bGUgeyB9XG4iXX0=