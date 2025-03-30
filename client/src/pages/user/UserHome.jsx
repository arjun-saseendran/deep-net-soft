import {Menubar} from '../../components/MenuBar/Menubar'
import {ButtonBar} from '../../components/ButtonBar/ButtonBar'
import {LeftBar} from '../../components/LeftBar/LeftBar'
import {LeftGlass} from '../../components/LeftGlass/LeftGlass'
import {RightGlass} from '../../components/RightGlass/RightGlass'
import {Card} from '../../components/Card/Card'
import {RightBar} from '../../components/RightBar/RightBar'

export const UserHome = () => {
  return (
    <div>
      <section>
        <Menubar />
      </section>
      <section>
        <ButtonBar />
      </section>

      <main className="flex justify-between h-[672px]">
        <section>
          <LeftBar />
        </section>

        <section className="px-2 md:px-0">
          <LeftGlass />
          <Card />
          <RightGlass />
        </section>

        <section>
          <RightBar />
        </section>
      </main>
    </div>
  );
};
