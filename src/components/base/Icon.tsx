import React, {useEffect} from 'react';

const SVGS= {
  acclaim: (color: string) => (<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill={color} d="M855.466667 362.666667H661.333333V164.266667C661.333333 108.8 616.533333 64 561.066667 64 512 64 469.333333 96 460.8 142.933333 435.2 281.6 354.133333 405.333333 256 405.333333H149.333333c-46.933333 0-85.333333 40.533333-85.333333 87.466667V853.333333c0 46.933333 38.4 85.333333 85.333333 85.333334h588.8c57.6 0 108.8-38.4 123.733334-93.866667l96-347.733333c19.2-68.266667-32-134.4-102.4-134.4zM256 454.4V896H149.333333c-23.466667 0-42.666667-19.2-42.666666-42.666667V492.8C106.666667 469.333333 125.866667 448 149.333333 448h106.666667v6.4z m661.333333 29.866667L821.333333 832c-10.666667 38.4-44.8 64-83.2 64H298.666667V443.733333c81.066667-23.466667 170.666667-117.333333 204.8-290.133333 4.266667-27.733333 27.733333-46.933333 57.6-46.933333C593.066667 106.666667 618.666667 132.266667 618.666667 164.266667v196.266666c0 23.466667 21.333333 44.8 44.8 44.8h192c19.2 0 38.4 8.533333 51.2 25.6 12.8 14.933333 14.933333 34.133333 10.666666 53.333334z" p-id="1480"></path></svg>),
  acclaimed: (color: string) => (<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill={color || '#F55C47'} d="M64 483.04V872c0 37.216 30.144 67.36 67.36 67.36H192V416.32l-60.64-0.64A67.36 67.36 0 0 0 64 483.04z m793.28-138.048l-267.808 1.696c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-68.832-155.488-137.568-145.504-60.608 8.8-67.264 61.184-67.264 126.816v59.264c0 76.064-63.84 140.864-137.856 148L256 416.96v522.4h527.552a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96A102.72 102.72 0 0 0 857.28 344.992z"></path></svg>),
  comment: (color: string) => (<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill={color} d="M896 128c35.3456 0 64 28.6544 64 64v512c0 35.3456-28.6544 64-64 64H456.432l-149.2752 118.1024c-20.096 15.9008-49.2768 12.4992-65.1776-7.5984a46.4 46.4 0 0 1-10.0112-28.7888V768H128c-35.3456 0-64-28.6544-64-64V192c0-35.3456 28.6544-64 64-64h768z m0 48H128c-8.8368 0-16 7.1632-16 16v512c0 8.8368 7.1632 16 16 16h127.968c13.2544 0 24 10.7456 24 24v102.408l153.2272-121.2288a24 24 0 0 1 14.8912-5.1792H896c8.8368 0 16-7.1632 16-16V192c0-8.8368-7.1632-16-16-16zM512 400c26.5104 0 48 21.4896 48 48 0 26.5104-21.4896 48-48 48-26.5104 0-48-21.4896-48-48 0-26.5104 21.4896-48 48-48z m-192 0c26.5104 0 48 21.4896 48 48 0 26.5104-21.4896 48-48 48-26.5104 0-48-21.4896-48-48 0-26.5104 21.4896-48 48-48z m384 0c26.5104 0 48 21.4896 48 48 0 26.5104-21.4896 48-48 48-26.5104 0-48-21.4896-48-48 0-26.5104 21.4896-48 48-48z"></path></svg>),
  browsers: (color: string) => (<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill={color} d="M821.248 400.896c-66.56-100.352-180.224-166.912-309.248-166.912-129.024 0-243.2 66.56-309.248 166.912-16.896 25.6-30.208 52.736-40.448 81.92 10.24 28.672 23.552 56.32 40.448 81.92 66.56 100.352 180.224 166.912 309.248 166.912 129.024 0 243.2-66.56 309.248-166.912 16.896-25.6 30.208-52.736 40.448-81.92-9.728-28.672-23.552-56.32-40.448-81.92z m-309.248 286.72c-138.752 0-258.56-84.48-309.76-204.8 51.2-120.32 171.008-204.8 309.76-204.8s258.56 84.48 309.76 204.8c-51.2 120.32-171.008 204.8-309.76 204.8z"></path><path fill={color} d="M512 346.112c-75.264 0-136.704 61.44-136.704 136.704S436.736 619.52 512 619.52s136.704-61.44 136.704-136.704-61.44-136.704-136.704-136.704z m0 229.376c-51.2 0-92.672-41.472-92.672-92.672S460.8 390.144 512 390.144s92.672 41.472 92.672 92.672-41.472 92.672-92.672 92.672z"></path></svg>),
  transmit: (color: string) => (<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M817.06496 256a17.49504 17.49504 0 0 1 0 34.99008c-188.74368 0-341.75488 153.0112-341.75488 341.75488a17.49504 17.49504 0 0 1-34.99008 0C440.32 424.67328 608.99328 256 817.06496 256z" fill="#FA5A00" p-id="2574"></path><path fill={color} d="M512 204.8a17.4336 17.4336 0 0 1 1.67936 34.78528l-1.67936 0.08192H315.20768c-40.81664 0-74.06592 32.36352-75.4944 72.832l-0.0512 2.70848v393.58464c0 40.81664 32.36864 74.06592 72.83712 75.4944l2.70848 0.0512h393.58464c40.81664 0 74.06592-32.36864 75.4944-72.83712l0.0512-2.70848V512a17.4336 17.4336 0 0 1 34.78016-1.67936L819.2 512v196.79232c0 59.92448-47.73888 108.6976-107.264 110.3616l-3.14368 0.04608H315.20768c-59.92448 0-108.6976-47.73888-110.3616-107.264l-0.04608-3.14368V315.20768c0-59.92448 47.73888-108.6976 107.264-110.3616l3.14368-0.04608H512z" p-id="2575"></path><path d="M683.31008 192.9984a17.5872 17.5872 0 0 1 22.41024-7.1168l1.50016 0.768 118.5792 67.87584a17.28 17.28 0 0 1 7.18336 22.2208l-0.768 1.4848-68.46976 117.57056a17.5872 17.5872 0 0 1-23.9104 6.3488 17.28 17.28 0 0 1-7.17824-22.2208l0.768-1.4848 59.70944-102.54336-103.41888-59.19232a17.28 17.28 0 0 1-7.17824-22.2208l0.768-1.4848z" fill="#FA5A00"></path></svg>),
  close: (color: string) => (<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill={color} d="M810.666667 273.493333L750.506667 213.333333 512 451.84 273.493333 213.333333 213.333333 273.493333 451.84 512 213.333333 750.506667 273.493333 810.666667 512 572.16 750.506667 810.666667 810.666667 750.506667 572.16 512 810.666667 273.493333z"></path></svg>),
  checked: (color: string) => (<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M417.185185 768c-9.481481 0-18.962963-3.792593-26.548148-11.377778l-246.518518-246.518518c-15.17037-15.17037-15.17037-37.925926 0-53.096297 15.17037-15.17037 37.925926-15.17037 53.096296 0L417.185185 676.977778l409.6-409.6c15.17037-15.17037 37.925926-15.17037 53.096296 0 15.17037 15.17037 15.17037 37.925926 0 53.096296l-436.148148 436.148148c-7.585185 7.585185-17.066667 11.377778-26.548148 11.377778z" fill={color}></path></svg>),
  info: (color: string = '#bfbfbf') => (<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M512.001 928.997c230.524 0 418.076-187.552 418.075-418.077 0-230.527-187.552-418.077-418.075-418.077s-418.077 187.55-418.077 418.077c0 230.525 187.552 418.077 418.077 418.077zM512 301.88c28.86 0 52.26 23.399 52.26 52.263 0 28.858-23.399 52.257-52.26 52.257s-52.26-23.399-52.26-52.257c0-28.863 23.399-52.263 52.26-52.263zM459.74 510.922c0-28.86 23.399-52.26 52.26-52.26s52.26 23.399 52.26 52.26l0 156.775c0 28.86-23.399 52.26-52.26 52.26s-52.26-23.399-52.26-52.26l0-156.775z" fill={color}></path></svg>),
  loading: (color: string, width: number=16, height: number=16) => (<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width={width} height={height}><path d="M626.34496 121.8304c0 53.15072-43.07968 96.2304-96.2304 96.2304-53.1456 0-96.2304-43.07968-96.2304-96.2304C433.88928 68.67968 476.96896 25.6 530.11456 25.6c53.1456 0 96.2304 43.0848 96.2304 96.2304zM530.11456 833.9968c-46.50496 0-84.1984 37.69856-84.1984 84.1984s37.69856 84.1984 84.1984 84.1984 84.1984-37.69856 84.1984-84.1984-37.69344-84.1984-84.1984-84.1984z m398.18752-253.83936c-33.21856 0-60.14464-26.92096-60.14464-60.14464 0-33.21856 26.92608-60.14464 60.14464-60.14464 33.22368 0 60.14464 26.92608 60.14464 60.14464-0.00512 33.21856-26.9312 60.14464-60.14464 60.14464zM228.15744 520.0128c0-53.1456-43.07968-96.2304-96.2304-96.2304-53.1456 0-96.2304 43.07968-96.2304 96.2304 0 53.1456 43.07968 96.2304 96.2304 96.2304 53.15072 0 96.2304-43.0848 96.2304-96.2304z m88.448-349.59872c37.5808 37.5808 37.5808 98.5088 0 136.08448-37.5808 37.5808-98.5088 37.5808-136.0896 0s-37.5808-98.5088 0-136.0896 98.5088-37.5808 136.0896 0.00512z m444.03712 580.12672c-28.1856 28.1856-28.1856 73.8816-0.00512 102.0672 28.1856 28.1856 73.8816 28.1856 102.0672 0 28.1856-28.1856 28.1856-73.8816 0-102.0672-28.18048-28.19072-73.87648-28.19072-102.06208 0z m85.05856-478.06464c-18.7904 18.7904-49.25952 18.7904-68.03968 0-18.79552-18.79552-18.79552-49.25952 0-68.0448a48.09728 48.09728 0 0 1 68.03968 0c18.7904 18.7904 18.7904 49.25952 0 68.0448zM316.60544 733.52704c-37.5808-37.5808-98.5088-37.5808-136.0896 0s-37.5808 98.5088 0 136.08448c37.5808 37.5808 98.5088 37.5808 136.08448 0 37.5808-37.57568 37.5808-98.50368 0.00512-136.08448z" fill={color}></path></svg>),
  theme: (color: string, width: number=16, height: number=16) => (<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width={width} height={height}><path d="M67.26 511.83a444.74 449.08 0 1 0 889.48 0 444.74 449.08 0 1 0-889.48 0Z" fill="#F4F4F4"></path><path d="M766.08 532.09s-6.55-54.63-110.18-24.58c-34.39 2.61-36.62-23.51-36.62-23.51s106.18-61.56 60-130.1-126.86-47.56-196.19-43.65S321.7 365.42 297.2 382.1 178.53 467 204.47 587.2s205.37 156.39 205.37 156.39 142.58 41.86 268.87-19.22 87.37-192.28 87.37-192.28z m-223.65-46c-26.8 0-48.53-14.49-48.53-32.36s21.73-32.36 48.53-32.36S591 435.87 591 453.74s-21.77 32.36-48.57 32.36z" fill="#F9B5A0"></path><path d="M723.87 455.52s-11.12-9.52-20.36-11.25-196.71 304.4-196.71 304.4 3.12 3.3 4.88-2 202.8-266.59 212.19-291.15z" fill="#FE7643"></path><path d="M762.68 397.75L752 384.67l-51.36 61.74s19.29 11.42 21.44 12.67c2.05-1.92 40.6-61.33 40.6-61.33z" fill="#C1C1C1"></path><path d="M823.22 266.08s-31.84 42.41-50 54.82-38.65 27.1-25.62 59.9c-0.24 8.62 13.87 18.34 13.87 18.34s36.49 2 55.06-62.48c0 0 10.36-27.39 6.69-70.58z" fill="#FE7643"></path><path d="M417.36 419.02m-32.66 0a32.66 32.66 0 1 0 65.32 0 32.66 32.66 0 1 0-65.32 0Z" fill="#FFFFFF"></path><path d="M341.71 540.53m-43.23 0a43.23 43.23 0 1 0 86.46 0 43.23 43.23 0 1 0-86.46 0Z" fill="#FFFFFF" p-id="5544"></path><path d="M417.36 656.87m-40.43 0a40.43 40.43 0 1 0 80.86 0 40.43 40.43 0 1 0-80.86 0Z" fill="#FFFFFF"></path></svg>),
  heart: (color: string) => (<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M892.543016 224.150106c-9.284457-11.914354-17.804505-21.814842-26.454512-30.930453C759.437485 80.827887 642.682341 92.003414 536.033369 176.799682c-9.493212 7.547907-18.453281 15.383362-26.88737 23.346731-8.43409-7.963369-17.395182-15.798824-26.888394-23.346731C375.608633 92.003414 258.853489 80.827887 152.202471 193.21863c-8.650007 9.115612-17.170055 19.016099-25.559119 29.714765C-2.680039 410.134984 68.411089 595.897805 259.728416 764.030084c42.320874 37.192064 87.560218 70.64906 132.799562 99.905384 15.841803 10.245342 30.570249 19.244296 43.816948 26.932396 8.024767 4.657067 13.827937 7.872295 17.044188 9.578146 4.869914 2.916423 9.728572 5.142114 14.530948 6.771217 3.470031 1.619894 7.516184 3.091408 12.218276 4.387937 25.377994 6.998391 62.97938 1.908466 85.839017-11.764951 2.14178-1.101077 7.944949-4.315282 15.969717-8.972349 13.246699-7.688099 27.974122-16.687054 43.816948-26.932396 45.239344-29.256324 90.478687-62.71332 132.799562-99.905384C949.879885 595.897805 1020.971014 410.134984 892.543016 224.150106z" fill={color}></path></svg>),
  left: (color: string, width: number = 16, height: number= 16) => (<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width={width} height={height}><path d="M670.977781 808.954249c-5.300726 0-10.596336-2.045589-14.603603-6.126534L368.69006 509.86743c-7.818059-7.961322-7.818059-20.717857 0-28.67918l287.684118-292.960285c7.92039-8.065699 20.877493-8.182356 28.942169-0.26299 8.065699 7.919367 8.182356 20.877493 0.264013 28.942169L411.976936 495.526817l273.603425 278.620695c7.918343 8.064676 7.801686 21.022803-0.264013 28.942169C681.331593 807.002804 676.153664 808.954249 670.977781 808.954249z" fill={color}></path></svg>)
};

export default function Icon(props: {name: string, color?: string, className?: string, width?: number, height?: number}) {
  return (
    <span className={'base-icon '+ props.className || ''}>{(SVGS as Obj)[props.name](props.color, props.width, props.height)}</span>
  );
}
