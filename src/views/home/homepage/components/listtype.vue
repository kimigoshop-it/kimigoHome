<!-- @format -->

<template>
    <div class="detailbox w">
        <div class="backlogo">
            <img src="@/assets/image/logof.png" alt="" />
            <span>{{ t("home.pickup.Qualitytransport") }}</span>
        </div>
        <p>Quality Transportation</p>
        <div class="listbox">
            <div
                class="flexbox"
                v-for="(item, index) in listinput"
                :key="index"
            >
                <div class="iconback">
                    <svg-icon :name="item.icon" />
                </div>
                <div class="tit">
                    <p>{{ item.p }}</p>
                    <span>{{ item.span }}</span>
                </div>
                <svg-icon :name="item.icontwo" class="svg" />
                <img :src="item.img" alt="" />
            </div>
        </div>
        <!-- <n-button color="#606AFF">{{ t("home.pickup.more") }}</n-button> -->
    </div>
</template>

<script setup lang="ts">
import transport1 from "@/assets/image/transport1.png";
import transport2 from "@/assets/image/transport2.png";
import transport3 from "@/assets/image/transport3.png";
import transport4 from "@/assets/image/transport4.png";
import { computed } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const listinput = computed(() => {
    return [
        {
            icon: "truck1",
            id: 0,
            p: t("home.pickup.roadtransportation"),
            img: transport1,
            icontwo: "asd",
            span: t("home.pickup.pickuptit"),
        },
        {
            icon: "truck2",
            id: 1,
            p: t("home.pickup.storage"),
            img: transport2,
            icontwo: "asd2",
            span: t("home.pickup.storagetit"),
        },
        {
            icon: "truck3",
            id: 2,
            p: t("home.pickup.seatransportation"),
            img: transport3,
            icontwo: "asd3",
            span: t("home.pickup.seatransportationtit"),
        },
        {
            icon: "truck4",
            id: 3,
            p: t("home.pickup.airlift"),
            img: transport4,
            icontwo: "asd4",
            span: t("home.pickup.airlifttit"),
        },
    ];
});
</script>

<style lang="scss" scoped>
.detailbox {
    box-sizing: border-box;
    padding: 8.75rem 0 60px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .backlogo {
        width: 50vw;
        height: 49px;
        font-size: 28px;
        font-weight: bold;
        color: #4d4d4d;
        position: relative;
        display: flex;
        justify-content: center;
        margin-bottom: 0.5rem;

        img {
            position: absolute;
            width: 208px;
        }

        span {
            z-index: 111;
            margin-top: 6px;
        }
    }

    > p {
        width: 100%;
        margin: 0 auto;
        font-family: Source Han Sans CN;
        font-size: 14px;
        font-weight: normal;
        line-height: 24px;
        text-align: center;
        letter-spacing: 0.5em;
        height: 24px;
    }

    .listbox {
        display: flex;
        margin-top: 2rem;
        width: 100%;
        flex-wrap: wrap;
        align-content: space-between;
        justify-content: space-between;
        margin-bottom: 30px;
        padding-bottom: 20.4px;

        .flexbox {
            width: 33.75rem;
            min-height: 7.25rem;
            border-radius: 0.75rem;
            background: #f6f7fb;
            display: flex;
            box-sizing: border-box;
            padding-left: 2rem;
            padding-right: 0.625rem;
            margin-bottom: 1.3rem;
            position: relative;
            padding-right: 1rem;
            cursor: pointer;
            align-items: center;

            > .iconback {
                width: 3.75rem;
                height: 3.75rem;
                border-radius: 1.875rem;
                background: #ffffff;
                box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                bottom: 10%;

                > svg {
                    width: 2.5rem;
                    height: 2.5rem;
                }
            }

            .tit {
                height: 100%;
                padding: 0 0.875rem 0 1.5rem;
                box-sizing: border-box;

                p {
                    font-family: Source Han Sans CN;
                    font-size: 18px;
                    font-weight: bold;
                    color: #4d4d4d;
                    margin-bottom: 1px;
                }

                span {
                    width: 23rem;
                    font-family: Source Han Sans CN;
                    font-size: 14px;
                    font-weight: normal;
                    color: #666666;
                    display: inline-block;
                    padding-bottom: 12.8px;
                    padding-right: 1.5rem;
                }
            }

            > img {
                width: 5rem;
                height: 5rem;
                position: absolute;
                right: 2px;
                bottom: 1px;
            }

            > svg {
                position: absolute;
                opacity: 0;
            }
        }

        .flexbox:hover {
            background: #7d85fc;

            .tit {
                p {
                    color: #ffffff;
                }

                span {
                    color: #ffffff;
                }
            }

            > img {
                opacity: 0;
            }

            > svg {
                width: 5rem;
                height: 5rem;
                position: absolute;
                right: 2px;
                bottom: 1px;
                opacity: 1;
            }
        }
    }
}

@media (max-width: 999px) {
    .detailbox {
        padding: 8.75rem 1.5rem 3.75rem;
    }

    .detailbox .listbox .flexbox {
        width: 100%;
        display: grid;
        grid-template-columns: auto 1fr;
    }

    .detailbox .backlogo {
        height: fit-content;
    }

    .detailbox .backlogo span {
        text-align: center;
    }

    // .detailbox .listbox {
    //     width: fit-content;
    //     padding-left: 1.5rem;
    //     padding-right: 1.5rem;
    // }

    // .detailbox .listbox .flexbox > .iconback {
    //     width: 2.75rem;
    //     height: 2.75rem;
    // }

    // .detailbox .listbox .flexbox > .iconback > svg {
    //     width: 1.5rem;
    //     height: 1.5rem;
    // }

    .detailbox .listbox .flexbox .tit span {
        width: inherit;
        word-break: break-all;
    }
}
</style>
