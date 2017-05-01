/**
 * @license Copyright © 2017 Nicholas Jamieson. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/cartant/firebase-thermite-ng
 */

import { NgZone } from "@angular/core";
import { Scheduler } from "rxjs/Scheduler";
import { async } from "rxjs/scheduler/async";
import { Subscription } from "rxjs/Subscription";

// See this Stack Overflow answer:
// http://stackoverflow.com/a/43184760/6680611
//
// actions$.ofType("[Something] SOME_ACTION")
//   .map(toPayload)
//   .bufferTime(300, leaveZone(this.ngZone))
//   .filter(payloads => payloads.length > 0)
//   .observeOn(enterZone(this.ngZone))
//   ...

class EnterZoneScheduler {

    constructor(
        private zone: NgZone,
        private scheduler: Scheduler
    ) {}

    schedule(...args: any[]): Subscription {

        return this.zone.run(() => this.scheduler.schedule.apply(
            this.scheduler,
            args
        ));
    }
}

class LeaveZoneSchduler {

    constructor(
        private zone: NgZone,
        private scheduler: Scheduler
    ) {}

    schedule(...args: any[]): Subscription {

        return this.zone.runOutsideAngular(() => this.scheduler.schedule.apply(
            this.scheduler,
            args
        ));
    }
}

export function enterZone(zone: NgZone, scheduler: Scheduler = async): Scheduler {

    return new EnterZoneScheduler(zone, scheduler) as any;
}

export function leaveZone(zone: NgZone, scheduler: Scheduler = async): Scheduler {

    return new LeaveZoneSchduler(zone, scheduler) as any;
}
