"""create match table

Revision ID: 0981195aad6f
Revises: 
Create Date: 2020-11-11 14:17:30.290246

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0981195aad6f'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('matches',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('gameId', sa.BIGINT(), nullable=False),
    sa.Column('platformId', sa.String(length=40), nullable=False),
    sa.Column('gameCreation', sa.BIGINT(), nullable=False),
    sa.Column('gameDuration', sa.BIGINT(), nullable=False),
    sa.Column('queueId', sa.Integer(), nullable=False),
    sa.Column('seasonId', sa.Integer(), nullable=False),
    sa.Column('gameMode', sa.String(length=40), nullable=False),
    sa.Column('teams', sa.Text(), nullable=False),
    sa.Column('participants', sa.Text(), nullable=False),
    sa.Column('participantIdentities', sa.Text(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('gameId')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('matches')
    # ### end Alembic commands ###